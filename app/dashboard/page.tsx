"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, Columns, Plus, Ban, TriangleAlert } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/ui/status-chip";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { mockScans, metricsSummary } from "@/data/mock";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function DashboardPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const filteredScans = mockScans.filter(
        (scan) =>
            scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            scan.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="space-y-6 max-w-full xl:ml-8 pb-10">
                <div className="flex flex-col items-start xl:items-center justify-between gap-6 xl:gap-10 p-4 rounded-xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-[#161a21] shadow-sm">
                    <div className="flex flex-wrap items-center justify-start xl:justify-between w-full h-8 gap-4 xl:gap-0">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-32 hidden xl:block" />
                        <Skeleton className="h-5 w-32 hidden xl:block" />
                        <Skeleton className="h-5 w-32 hidden xl:block" />
                        <Skeleton className="h-5 w-32 hidden xl:block" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-[104px] rounded-xl" />
                        ))}
                    </div>
                </div>
                <Card className="overflow-hidden shadow-sm">
                    <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-[#161a21] border-neutral-200 dark:border-neutral-700">
                        <Skeleton className="h-10 w-full sm:max-w-xs rounded-md" />
                        <div className="flex gap-3 w-full sm:w-auto">
                            <Skeleton className="h-10 w-24 rounded-md" />
                            <Skeleton className="h-10 w-24 rounded-md" />
                            <Skeleton className="h-10 w-32 rounded-md" />
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            <Skeleton className="h-10 w-full" />
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Skeleton key={i} className="h-16 w-full" />
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-full xl:ml-8 pb-10">
            <div className="flex flex-col items-start xl:items-center justify-between gap-6 xl:gap-10 text-sm text-muted-foreground bg-white dark:bg-[#161a21] p-4 rounded-xl border border-gray-200 dark:border-gray-800/50 shadow-sm">

                <div className="flex flex-wrap items-center justify-start xl:justify-between gap-4 xl:gap-0 w-full">
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Org:</span> Project X</div>
                    <div className="w-px h-4 bg-neutral-400 hidden xl:block"></div>
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Owner:</span> Nammagiri</div>
                    <div className="w-px h-4 bg-neutral-400 hidden xl:block"></div>
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Total Scans:</span>100</div>
                    <div className="w-px h-4 bg-neutral-400 hidden xl:block"></div>
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Scheduled:</span>1000</div>
                    <div className="w-px h-4 bg-neutral-400 hidden xl:block"></div>
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Rescans:</span>100</div>
                    <div className="w-px h-4 bg-neutral-400 hidden xl:block"></div>
                    <div className="flex gap-2 dark:text-foreground text-neutral-900"><span className="font-medium text-gray-500">Failed Scans:</span>100</div>
                    <div className="flex items-center text-teal-500 font-medium w-full lg:w-auto mt-2 lg:mt-0">
                        <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        10 mins ago
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
                    {[
                        { label: "Critical Severity", data: metricsSummary.critical, icon: <Ban className="w-4 h-4" />, color: "text-[#ef4444]", bg: "bg-rose-100" },
                        { label: "High Severity", data: metricsSummary.high, icon: <TriangleAlert className="w-5 h-5" />, color: "text-[#f97316]", bg: "bg-orange-100" },
                        { label: "Medium Severity", data: metricsSummary.medium, icon: <TriangleAlert className="w-5 h-5" />, color: "text-[#eab308]", bg: "bg-yellow-100" },
                        { label: "Low Severity", data: metricsSummary.low, icon: <Search className="w-5 h-5" />, color: "text-[#22c55e]", bg: "bg-teal-100" },
                    ].map((metric) => (
                        <Card key={metric.label} className="p-5 flex flex-col justify-between transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-lg text-neutral-400 dark:text-muted-foreground">{metric.label}</span>
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center font-bold xl:mr-6", metric.bg, metric.color)}>
                                    {metric.icon}
                                </div>
                            </div>
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold">{metric.data.count}</span>
                                <span className={cn("text-xs pb-1 font-medium", metric.data.trendUp ? "text-rose-500" : "text-emerald-500")}>
                                    {metric.data.trendUp ? "↑" : "↓"} {metric.data.trend}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <Card className="overflow-hidden shadow-sm">
                <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-[#161a21] border-neutral-200 dark:border-neutral-700">
                    <div className="relative w-full sm:max-w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search scans by name or type..."
                            className="pl-9 h-10 w-full border border-neutral-200 dark:border-neutral-700 rounded-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto">
                        <Button variant="outline" className="flex-1 sm:flex-none gap-2 h-10 cursor-pointer border border-neutral-200 dark:border-neutral-700 rounded-md">
                            <Filter className="h-4 w-4" /> Filter
                        </Button>
                        <Button variant="outline" className="flex-1 sm:flex-none gap-2 h-10 cursor-pointer border border-neutral-200 dark:border-neutral-700 rounded-md">
                            <Columns className="h-4 w-4" /> Column
                        </Button>
                        <Button onClick={() => toast.success("New scan initiated")} className="flex-1 sm:flex-none gap-2 h-10 bg-teal-600 hover:bg-teal-700 text-white rounded-md px-5 cursor-pointer">
                            <Plus className="h-4 w-4" /> New scan
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead className="text-xs text-muted-foreground uppercase bg-white dark:bg-[#161a21] border-b border-neutral-200 dark:border-neutral-700">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Scan Name</th>
                                <th className="px-6 py-4 font-semibold">Type</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold w-48">Progress</th>
                                <th className="px-6 py-4 font-semibold text-center">Vulnerability</th>
                                <th className="px-6 py-4 font-semibold text-right">Last Scan</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#161a21]">
                            {filteredScans.map((scan) => (
                                <tr
                                    key={scan.id}
                                    onClick={() => router.push(`/dashboard/scans/${scan.id}`)}
                                    className="hover:bg-gray-50 dark:hover:bg-[#1C2129] transition-colors cursor-pointer group"
                                >
                                    <td className="px-6 py-4 font-medium text-foreground group-hover:text-teal-600 transition-colors">{scan.name}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{scan.type}</td>
                                    <td className="px-6 py-4"><StatusChip status={scan.status} /></td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                                                <div
                                                    className={cn("h-full rounded-full transition-all", scan.status === "Failed" ? "bg-[#ef4444]" : "bg-teal-500")}
                                                    style={{ width: `${scan.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-semibold w-10">{scan.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {scan.vulnerabilities.critical === 0 && scan.vulnerabilities.high === 0 && scan.vulnerabilities.medium === 0 && scan.vulnerabilities.low === 0 ? (
                                            <span className="text-muted-foreground flex justify-center">-</span>
                                        ) : (
                                            <div className="flex items-center justify-center gap-1">
                                                {scan.vulnerabilities.critical > 0 && <SeverityBadge severity="Critical" count={scan.vulnerabilities.critical} />}
                                                {scan.vulnerabilities.high > 0 && <SeverityBadge severity="High" count={scan.vulnerabilities.high} />}
                                                {scan.vulnerabilities.medium > 0 && <SeverityBadge severity="Medium" count={scan.vulnerabilities.medium} />}
                                                {scan.vulnerabilities.low > 0 && <SeverityBadge severity="Low" count={scan.vulnerabilities.low} />}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right text-muted-foreground">{scan.lastScan}</td>
                                </tr>
                            ))}
                            {filteredScans.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                                        No scans found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-sm text-muted-foreground bg-white dark:bg-[#161a21]">
                    <span>Showing 15 of 100 Scans</span>
                    <div className="flex gap-1">
                        <Button variant="outline" size="icon" className="h-8 w-8 disabled:opacity-50 cursor-pointer">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 disabled:opacity-50 cursor-pointer">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
