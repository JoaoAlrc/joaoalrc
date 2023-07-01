import React, { useEffect, useState } from "react";

import "./style.css";

interface TypingEffectProps {
  text: string;
  className: string;
  velocity: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  className,
  velocity,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, velocity);

      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [text, currentIndex, velocity]);

  return <span className={className}>{currentText}</span>;
};

export default TypingEffect;
