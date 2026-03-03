"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Menu } from "lucide-react";

interface TopbarProps {
    setSidebarOpen?: (isOpen: boolean) => void;
}

export function Topbar({ setSidebarOpen }: TopbarProps) {

    return (
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-white dark:bg-[#0a0f13] px-6 xl:px-12 border-b border-gray-200 dark:border-[#27272a]">
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="xl:hidden mr-2"
                    onClick={() => setSidebarOpen?.(true)}
                >
                    <Menu className="h-5 w-5" />
                </Button>
                <div className="sm:flex hidden  items-center text-sm">
                    <span className="font-semibold text-foreground">Scan</span>
                    <span className="mx-2 text-muted-foreground">/</span>
                    <span className="text-muted-foreground">Private Assets</span>
                    <span className="mx-2 text-muted-foreground">/</span>
                    <span className="font-semibold text-teal-500">New Scan</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <ThemeToggle />
                <div className="flex justify-end gap-3">
                    <Button
                        variant="outline"
                        className="bg-white dark:bg-[#0a0f13] border-gray-200 dark:border-neutral-800"
                        onClick={() => toast.success("Report export initiated")}
                    >
                        Export Report
                    </Button>
                    <Button
                        variant="destructive"
                        className="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white"
                        onClick={() => toast.error("Scan stopped")}
                    >
                        Stop Scan
                    </Button>
                </div>
            </div>
        </header>
    );
}
