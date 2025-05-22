"use client";

import { ProductFeatures } from '@/components/sections/product-features'

export default function ProductFeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <ProductFeatures />
      </div>
    </main>
  )
}
