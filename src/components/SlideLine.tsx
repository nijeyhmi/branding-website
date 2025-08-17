import React, { useState, useEffect } from "react";

const SlideLine = ({
  text,
  from = "left",
  delay = 0,
  isHighlight = false,
}: {
  text: string;
  from: "right" | "left";
  delay: number;
  isHighlight: boolean;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const base = "transition-transform duration-700 ease-out";
  const hiddenTransform =
    from === "right" ? "translate-x-12" : "-translate-x-12";
  const visibleTransform = "translate-x-0";
  const highlight = isHighlight
    ? "text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
    : "text-white text-shadow-md md:text-shadow-none md:text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight";

  return (
    <div
      style={{ lineHeight: "1.5" }}
      className={`opacity-0 ${visible ? "opacity-100" : ""} ${base} ${
        visible ? visibleTransform : hiddenTransform
      } ${highlight}`}
    >
      {text}
    </div>
  );
};

export default SlideLine;
