import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-neutral-700 px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm",
                    "focus:outline-none focus:ring-0 focus:border-2 focus:border-teal-600 focus:scale-[1.009] transition-all duration-200",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
