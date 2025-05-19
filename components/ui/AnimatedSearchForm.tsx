'use client';

import { useAnimationControls } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import '@/components/ui/input';

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
'4+ years experience',
'Consultancy Experience',
'Springboot, AWS'];


const CHAR_TYPING_SPEED = 50; // ms per character

export const AnimatedSearchForm: FC<AnimatedSearchFormProps> = ({ triggerAnimation = false }) => {
  const controls = useAnimationControls();
  const [currentField, setCurrentField] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      const interval = setInterval(() => {
        setCurrentChar((prev) => {
          if (prev >= searchFields[currentField].length) {
            setCurrentField((prevField) => (prevField + 1) % searchFields.length);
            return 0;
          }
          return prev + 1;
        });
      }, CHAR_TYPING_SPEED);

      return () => clearInterval(interval);
    }
  }, [triggerAnimation, currentField]);

  return (
    <div className="w-full space-y-4">
      <input
        type="text"
        placeholder={placeholders[currentField]}
        value={searchFields[currentField].slice(0, currentChar)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        readOnly
      />
    </div>
  );
};