import { forwardRef } from "react";

interface InputProps {
    type: string;
    id: string;
    placeholder: string;
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, id, placeholder }, ref) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor={id}>
                {label}
            </label>
            <input
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400"
                type={type}
                id={id}
                placeholder={placeholder}
                ref={ref}
            />
        </div>
    );
});

export default Input;