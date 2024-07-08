import { twMerge } from "tailwind-merge";

export function Card({ children, className }) {
  return (
    <div className={twMerge("border border-slate-200 m-0 p-0 shadow-md", className)}>
      {children}
    </div>
  );
}
