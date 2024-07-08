import { twMerge } from "tailwind-merge";

export function Buttons({ children, className }) {
    return (
        <button
            className={twMerge(
                "rounded-lg px-3 py-1 h-10 w-32 border border-slate-400 bg-rose-50 p-0 m-0",
                className
            )}
        >
            {children}
        </button>
    );
}
