import { useState } from "react";

import NewPlaceTree from "./NewPlaceTree";
import { initialTravelPlan } from "../data/places-normalized";

interface Place {
  id: number;
  title: string;
  childIds: number[];
}

export default function NewTravelPlan() {
  const [plan, setPlan] = useState<{ [key: number]: Place }>(initialTravelPlan);

  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId: number, childId: number) => {
    const parent = plan[parentId];
    console.log("ok");

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id: number) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>New Place To Visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <NewPlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            parentId={0}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
