"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FolderOpenDot,
    LineChart,
    CalendarDays,
    Bell,
    Settings,
    HelpCircle,
} from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderOpenDot },
    { name: "Scans", href: "/dashboard/scans", icon: LineChart },
    { name: "Schedule", href: "/schedule", icon: CalendarDays },
];

const bottomNavItems = [
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Support", href: "/support", icon: HelpCircle },
];

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className={cn(
            "fixed left-0 top-0 z-40 flex h-screen w-72 flex-col bg-white dark:bg-[#0a0f13] transition-transform duration-300 xl:translate-x-0 border-r border-[#e5e5e5] dark:border-[#161a21]",
            isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <div className="flex flex-col flex-1">
                <div className="flex h-16 items-center px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center gap-2 z-10">
                            <div className="h-7 w-7 rounded-full bg-teal-500 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-white"></div>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">aps</span>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col justify-between overflow-y-auto py-6">
                    <nav className="space-y-4 px-4">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/dashboard" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 rounded-full px-4 py-3 font-medium transition-colors",
                                        isActive
                                            ? "bg-teal-100 text-teal-900 dark:bg-teal-900/40 dark:text-teal-400"
                                            : "text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800/20 hover:text-accent-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="border-t border-[#e5e5e5] dark:border-[#161a21] h-1 my-10"></div>
                    <div className="space-y-4 px-4">
                        {bottomNavItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/dashboard" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 rounded-full px-4 py-3 font-medium transition-colors",
                                        isActive
                                            ? "bg-teal-50 text-teal-900 dark:bg-teal-900/40 dark:text-teal-400"
                                            : "text-muted-foreground hover:bg-neutral-800/20 hover:text-accent-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-3 rounded-lg px-2 hover:bg-accent transition-colors cursor-pointer py-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-yellow-900 font-bold">
                        J
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-xs text-muted-foreground">admin@edu.com</span>
                        <span className="text-sm font-medium text-foreground">Security Lead</span>
                    </div>
                    <div className="text-muted-foreground">›</div>
                </div>
            </div>
        </aside>
    );
}
