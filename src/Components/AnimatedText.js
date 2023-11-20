import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const AnimatedText = ({texts}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      const text = texts[currentTextIndex];
      const intervalId = setInterval(() => {
        if (currentLetterIndex < text.length) {
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          clearInterval(intervalId);
          setIsAnimating(true);

          setTimeout(() => {
            const nextTextIndex = (currentTextIndex + 1) % texts.length;
            setCurrentTextIndex(nextTextIndex);
            setCurrentLetterIndex(0);
            setIsAnimating(false);
          }, 500);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [isAnimating, currentTextIndex, currentLetterIndex]);

  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, currentLetterIndex);

  return <Text>{displayedText}</Text>;
};

export default AnimatedText;
