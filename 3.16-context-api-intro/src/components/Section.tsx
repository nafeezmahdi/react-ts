import { LevelContext } from "../contexts/LevelContext";

type SectionProps = {
  level: number;
  children: React.ReactNode;
};

export default function Section({ level, children }: SectionProps) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}></LevelContext.Provider>
      {children}
    </section>
  );
}
