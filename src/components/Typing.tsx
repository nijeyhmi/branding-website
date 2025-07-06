import React, { useState, useEffect } from "react";

const Typing = ({
  lines = [],
  speed = 100,
  delay = 1000,
  highlightLine = 1,
}: {
  lines: string[];
  speed: number;
  delay: number;
  highlightLine: number;
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [renderedLines, setRenderedLines] = useState(lines.map(() => ""));

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    if (charIndex < lines[currentLineIndex].length) {
      const timeout = setTimeout(() => {
        setRenderedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] +=
            lines[currentLineIndex].charAt(charIndex);
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLineIndex, lines, speed, delay]);

  return (
    <div style={{ fontSize: "2rem", lineHeight: "1.5" }}>
      {renderedLines.map((line, idx) => (
        <div
          key={idx}
          className={
            idx === highlightLine
              ? "text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              : "text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
          }
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default Typing;
