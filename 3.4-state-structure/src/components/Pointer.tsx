import { useState, type PointerEvent } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({
    x: 20,
    y: 20,
  });

  const handlePointerMove = (evnt: PointerEvent<HTMLDivElement>) => {
    // console.dir(evnt);
    setPosition({
      x: evnt.clientX,
      y: evnt.clientY,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: -10,
          top: -10,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
