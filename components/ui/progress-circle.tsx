import React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
}

export function ProgressCircle({
    progress,
    size = 120,
    strokeWidth = 12,
    className,
}: ProgressCircleProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={cn("relative flex items-center justify-center bg-[#0a0f13] rounded-full", className)} style={{ width: size, height: size }}>
            <svg
                className="transform -rotate-90 w-full h-full"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-muted"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="text-[#0CC8A8] transition-all duration-1000 ease-in-out"
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center p-2 shadow-sm">
                <span className="text-3xl font-bold text-teal-500">{progress}%</span>
                <span className="text-xs text-white">In Progress</span>
            </div>
        </div>
    );
}
