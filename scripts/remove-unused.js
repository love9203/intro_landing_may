#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// Find all .ts and .tsx files in components/ui
const files = glob.sync('components/ui/**/*.{ts,tsx}', {
  cwd: process.cwd(),
  absolute: true
});

files.forEach(file => {
  const code = fs.readFileSync(file, 'utf-8');
  let modified = false;

  // Parse the file
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx']
  });

  // Track references
  const references = new Set();
  
  // First pass: collect all references
  traverse(ast, {
    Identifier(path) {
      if (path.isReferencedIdentifier()) {
        references.add(path.node.name);
      }
    }
  });

  // Second pass: remove unused imports and declarations
  traverse(ast, {
    ImportSpecifier(path) {
      const name = path.node.local.name;
      if (!references.has(name)) {
        path.remove();
        modified = true;
      }
    },
    VariableDeclarator(path) {
      if (path.node.id.type === 'Identifier') {
        const name = path.node.id.name;
        if (!references.has(name)) {
          path.remove();
          modified = true;
        }
      }
    },
    // Clean up empty import declarations
    ImportDeclaration(path) {
      if (path.node.specifiers.length === 0) {
        path.remove();
        modified = true;
      }
    },
    // Clean up empty variable declarations
    VariableDeclaration(path) {
      if (path.node.declarations.length === 0) {
        path.remove();
        modified = true;
      }
    }
  });

  if (modified) {
    // Generate the modified code
    const output = generate(ast, {
      retainLines: true,
      retainFunctionParens: true
    }, code);

    // Write back to file
    fs.writeFileSync(file, output.code);
    console.log(`Modified: ${path.relative(process.cwd(), file)}`);
  }
});
