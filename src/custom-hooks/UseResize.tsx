import React, { useState, useLayoutEffect } from "react";

export function useResize(myRef: React.RefObject<any>, sidebar: boolean) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const getDimensions = () => ({
      width: (myRef && myRef.current.offsetWidth) || 0,
      height: (myRef && myRef.current.offsetHeight) || 0,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef, sidebar]);

  return dimensions;
}
