import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";
import { ThemeContext } from "../context/ThemeContext";

interface SectionProps {
  children: React.ReactNode;
  isFancy?: boolean; // Optional prop
}

export default function Section({ children, isFancy }: SectionProps) {
  const level = useContext(LevelContext);
  const theme = useContext(ThemeContext);

  return (
    <section className={`section ${isFancy ? "fancy" : ""}`}>
      <p>My current theme is : {theme}</p>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
