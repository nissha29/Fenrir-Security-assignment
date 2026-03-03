import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-[#161a21]", className)}
            {...props}
        />
    )
}

export { Skeleton }
