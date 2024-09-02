import React, { useState, useEffect } from "react";

const CursorCoordinates: React.FC = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setCoordinates({
      x: event.clientX + window.scrollX,
      y: event.clientY + window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 p-4 bg-gray-800 text-white">
      X: {coordinates.x}, Y: {coordinates.y}
    </div>
  );
};

export default CursorCoordinates;
