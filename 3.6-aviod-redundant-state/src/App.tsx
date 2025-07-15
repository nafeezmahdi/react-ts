import { useState } from "react";
import Form from "./components/Form";
import Mirror from "./components/Mirror";

function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <Form />
      <br />
      <br />
      <br />
      <Mirror messageColor={color} />
      <br />
      <button onClick={handleChangeColor}>Change Color Form Parent</button>
    </div>
  );
}

export default App;
