"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background h-full">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex flex-col xl:pl-64">
                <Topbar setSidebarOpen={setIsSidebarOpen} />
                <main className="flex-1 p-6 space-y-6 bg-gray-50 dark:bg-[#0a0f13] h-full">
                    {children}
                </main>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 xl:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}
