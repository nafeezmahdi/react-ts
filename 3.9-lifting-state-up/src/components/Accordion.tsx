import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <h2>JS Courses</h2>
      <Panel
        title="Paid Course"
        isActive={activeIndex === 0}
        onActive={() => handleActive(0)}
      >
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est hic
        consequuntur voluptas atque quod repellendus corporis iste sed
        perferendis corrupti?
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 1}
        onActive={() => handleActive(1)}
      >
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est hic
        consequuntur voluptas atque quod repellendus corporis iste sed
        perferendis corrupti?
      </Panel>
    </>
  );
}
