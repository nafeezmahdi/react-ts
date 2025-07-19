type InlinePlace = {
  id: number;
  title: string;
  childPlaces: InlinePlace[];
};

interface PlaceTreeProps {
  place: InlinePlace;
}
export default function PlaceTree({ place }: PlaceTreeProps) {
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}
