interface Place {
  id: number;
  title: string;
  childIds: number[];
}

interface PlacesById {
  [key: number]: Place;
}

interface NewPlaceTreeProps {
  id: number; // The ID of the current place
  placesById: PlacesById; // The object containing all places, indexed by their IDs
  parentId: number; // The parent ID of the current place
  onComplete: (parentId: number, childId: number) => void; // The callback for completing a place
}

export default function NewPlaceTree({
  id,
  placesById,
  parentId,
  onComplete,
}: NewPlaceTreeProps) {
  const place = placesById[id];

  const childIds = place.childIds;

  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id: number) => (
            <NewPlaceTree
              key={id}
              id={id}
              placesById={placesById}
              parentId={parentId}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
