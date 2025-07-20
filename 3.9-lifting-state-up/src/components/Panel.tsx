import type { ReactNode } from "react";

type PanelProps = {
  title: string; // Title of the panel (e.g., "Free Course")
  children: ReactNode; // Inner content to display (could be text or JSX)
  isActive: boolean; // Whether this panel is currently expanded
  onActive: () => void; // Callback to activate this panel when clicked
};

export default function Panel({
  title,
  children,
  isActive,
  onActive,
}: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </section>
  );
}
