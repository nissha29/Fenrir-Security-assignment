import React from "react";
import { cn } from "@/lib/utils";
import { Severity } from "@/data/mock";

interface SeverityBadgeProps {
    severity: Severity;
    count?: number;
    className?: string;
}

export function SeverityBadge({ severity, count, className }: SeverityBadgeProps) {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded text-xs px-2 py-0.5";

    const variants = {
        Critical: "bg-[#ef4444] text-white",
        High: "bg-[#f97316] text-white",
        Medium: "bg-[#eab308] text-white",
        Low: "bg-[#22c55e] text-white",
    };

    return (
        <span className={cn(baseClasses, variants[severity], className)}>
            {count !== undefined ? count : severity}
        </span>
    );
}
