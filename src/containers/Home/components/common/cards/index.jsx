import { twMerge } from "tailwind-merge";

export function Card({ children, className }) {
    return (
        <div className={twMerge("border border-slate-50 p-0 m-0", className)}>
            {children}
        </div>
    );
}
