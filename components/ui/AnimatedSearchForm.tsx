'use client';

import { motion } from 'framer-motion';
import { FC, useEffect, useState, useRef } from 'react';
import '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AnimatedSearchFormProps {
  triggerAnimation?: boolean;
}

const placeholders = [
'Title',
'Location',
'Years of experience',
'Background',
'Skills'];


const searchFields = [
'Java Developer',
'Stockholm',
'8+',
'Consultancy experience',
'Springboot, AWS'];


const CHAR_TYPING_SPEED = 50; // ms per character
const FIELD_DELAY = 1500; // 1.5 second delay between fields

export const AnimatedSearchForm: FC<AnimatedSearchFormProps> = ({ triggerAnimation = false }) => {
  const [currentField, setCurrentField] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [formValues, setFormValues] = useState<string[]>(Array(placeholders.length).fill(''));
  const [isTyping, setIsTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState<boolean[]>(Array(placeholders.length).fill(false));
  
  // Use refs to safely handle intervals and timeouts
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset and start animation when triggerAnimation changes
  useEffect(() => {
    // Clean up any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (triggerAnimation) {
      // Start typing animation
      setIsTyping(true);
      
      // Reset all fields
      setFormValues(Array(placeholders.length).fill(''));
      setTypingComplete(Array(placeholders.length).fill(false));
      setCurrentField(0);
      setCurrentChar(0);
      
      // Log for debugging
      console.log('Animation started, typingComplete reset:', Array(placeholders.length).fill(false));
    }
    
    // Clean up on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [triggerAnimation]);

  // Handle the typing animation
  useEffect(() => {
    if (!isTyping || !triggerAnimation) return;
    
    console.log('Animation running for field:', currentField, placeholders[currentField]);
    
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Start a new typing interval
    intervalRef.current = setInterval(() => {
      setCurrentChar((prev) => {
        // If we've reached the end of the current field text
        if (prev >= searchFields[currentField].length) {
          console.log('Field completed:', currentField, placeholders[currentField]);
          
          // Update form values when typing animation completes for a field
          setFormValues(prevValues => {
            const newValues = [...prevValues];
            newValues[currentField] = searchFields[currentField];
            return newValues;
          });
          
          // Mark this field as complete
          setTypingComplete(prev => {
            const newState = [...prev];
            newState[currentField] = true;
            console.log('Marking field as complete:', currentField, placeholders[currentField]);
            return newState;
          });
          
          // Clear the current interval
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          
          // If there are more fields to animate
          if (currentField < searchFields.length - 1) {
            console.log('Moving to next field after delay');
            // Set timeout for the next field
            timeoutRef.current = setTimeout(() => {
              const nextField = currentField + 1;
              console.log('Moving to field:', nextField, placeholders[nextField]);
              setCurrentField(nextField);
              // Only clear after the delay!
              setCurrentChar(0);
            }, FIELD_DELAY);
          } else {
            // All fields are complete
            console.log('All fields complete');
            setIsTyping(false);
          }
          
          // Leave it at 'length' so the field stays visible
          return prev;
        }
        return prev + 1;
      });
    }, CHAR_TYPING_SPEED);

    // Clean up on unmount or when dependencies change
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping, triggerAnimation, currentField]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formValues);
    // Add your form submission logic here
  };

  return (
    <motion.form 
      className="w-full space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-4">
        {placeholders.map((placeholder, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={placeholder}
              value={
                // Show typing animation for current field
                (index === currentField && isTyping && triggerAnimation) ? 
                  searchFields[index].slice(0, currentChar) : 
                // Show completed text for fields that have been typed
                formValues[index]
              }
              onChange={(e) => {
                const newValues = [...formValues];
                newValues[index] = e.target.value;
                setFormValues(newValues);
              }}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly={index === currentField && triggerAnimation}
            />
          </div>
        ))}
      </div>
      
      <Button 
        type="submit" 
        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
      >
        Find Candidates
      </Button>
    </motion.form>
  );
};