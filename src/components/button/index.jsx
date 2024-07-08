import { twMerge } from "tailwind-merge";

export function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "rounded-md px-3 py-1 border border-slate-100 bg-yellow-600",
        className
      )}
    >
      {children}
    </button>
  );
}
