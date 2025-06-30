import React, { useRef, useLayoutEffect, useState } from "react";

export default function DescriptionBlock({ item, tabTitle }) {
  const engineRef = useRef(null);
  const descRef = useRef(null);

  const [engineHeight, setEngineHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useLayoutEffect(() => {
    const engineH = engineRef.current?.offsetHeight || 0;
    const descH = descRef.current?.scrollHeight || 0;

    setEngineHeight(engineH);

    // Only show toggle if description is significantly larger
    if (descH > engineH * 1.5) {
      setShowToggle(true);
    }
  }, [item.enginetext, item.description]);

  if (!item?.description) return null;

  return (
    <div className="mb-4 flex">
      {/* Engine Title */}
      {tabTitle !== "Specifications" && (
        <h2
          ref={engineRef}
          className="text-[#CE2028] text-[1.2rem] font-[800]"
        >
          {item.enginetext}
        </h2>
      )}

      {/* descriptionription */}
      {tabTitle !== "Specifications" && tabTitle !== "Customers" && (
        <>
          <p
            ref={descRef}
            className="text-[0.8rem] overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isExpanded ? "1000px" : `${engineHeight * 1.5}px`,
            }}
          >
            {item.description}
          </p>

          {/* Show "Tap for more" only if description is long */}
          {showToggle && (
            <span
              className="text-[#CE2028] text-[0.7rem] font-medium cursor-pointer block mt-1"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Tap to collapse" : "Tap for more"}
            </span>
          )}
        </>
      )}
    </div>
  );
}
