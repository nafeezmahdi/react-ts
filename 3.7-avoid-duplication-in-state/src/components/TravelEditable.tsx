import { useState, type ChangeEvent } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function TravelEditable() {
  const [items, setItems] = useState(initialItems);
  // const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedId, setSelectedId] = useState(0);

  // derived value from state
  const selectedItem = items.find((item) => item.id === selectedId);

  type ItemChangeHandler = (
    id: number,
    evnt: ChangeEvent<HTMLInputElement>
  ) => void;

  const handleItemChange: ItemChangeHandler = (id, evnt) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: evnt.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                // setSelectedItem(item);
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem?.title}.</p>
    </>
  );
}
