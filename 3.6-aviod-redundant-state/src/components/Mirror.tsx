import { useState } from "react";

// Define the props type
interface MirrorProps {
  messageColor: string;
}

export default function Mirror({ messageColor }: MirrorProps) {
  const [color, setColor] = useState(messageColor);

  const handleChangeColor = () => {
    setColor("#1b1b1b");
  };
  return (
    <div>
      <div style={{ color }}>Hello</div>
      <br />
      <button onClick={handleChangeColor}>Change Color From Child</button>
    </div>
  );
}
