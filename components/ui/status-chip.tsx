import React from "react";
import { cn } from "@/lib/utils";
import { ScanStatus } from "@/data/mock";

interface StatusChipProps {
    status: ScanStatus;
    className?: string;
}

export function StatusChip({ status, className }: StatusChipProps) {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-md text-xs px-2.5 py-1 border";

    const variants = {
        Completed: "border-[#22c55e]/20 bg-[#22c55e]/10 text-[#22c55e]",
        Scheduled: "border-[#94a3b8]/20 bg-[#94a3b8]/10 text-[#94a3b8]",
        Failed: "border-[#ef4444]/20 bg-[#ef4444]/10 text-[#ef4444]",
        Running: "border-teal-500/20 bg-teal-500/10 text-teal-600 dark:text-teal-400",
    };

    return (
        <span className={cn(baseClasses, variants[status], className)}>
            {status}
        </span>
    );
}
