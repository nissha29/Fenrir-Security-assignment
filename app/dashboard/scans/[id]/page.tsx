"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ChevronDown, X, Globe, Loader2, AlarmClock } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { mockScans, Scan } from "@/data/mock";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: "spidering", label: "Spidering", icon: <Globe className="w-5 h-5" /> },
    { id: "mapping", label: "Mapping", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg> },
    { id: "testing", label: "Testing", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
    { id: "validating", label: "Validating", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
    { id: "reporting", label: "Reporting", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
];

export default function ScanDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [scan] = useState<Scan | null>(() => {
        return mockScans.find((s) => s.id === id) || mockScans[0];
    });
    const [activeTab, setActiveTab] = useState<"activity" | "verification">("activity");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-6 max-w-full lg:pl-8 mx-auto pb-10 xl:pb-12 relative">
                <Card className="p-4 lg:p-8 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-[#161a21]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        <div className="flex justify-center shrink-0 lg:pr-12">
                            <Skeleton className="w-[110px] h-[110px] rounded-full" />
                        </div>
                        <div className="hidden lg:block border-l border-neutral-200 dark:border-neutral-800/80 h-44 w-3" />
                        <div className="block lg:hidden border-t border-neutral-200 dark:border-neutral-800/80 w-full h-[1px]" />
                        <div className="flex flex-col w-full gap-6 lg:gap-8">
                            <div className="w-full overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                                <div className="flex justify-between relative mt-2 z-0 min-w-[500px] lg:min-w-0">
                                    <div className="absolute top-6 lg:top-7 left-[30px] right-[30px] lg:left-[60px] lg:right-[60px] h-[2px] bg-neutral-200 dark:bg-neutral-800/80 -z-10" />
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 lg:gap-3 w-[80px] lg:w-[120px]">
                                            <Skeleton className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-transparent" />
                                            <Skeleton className="w-16 h-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 pt-4 border-t">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="space-y-2">
                                        <Skeleton className="w-16 h-3" />
                                        <Skeleton className="w-24 h-5" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="mt-6 flex flex-col h-[800px] lg:h-[700px] overflow-hidden border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-[#161a21]">
                    <div className="flex items-center justify-between border-b px-4 py-3 bg-gray-50 dark:bg-[#161a21]">
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-2.5 h-2.5 rounded-full" />
                            <Skeleton className="w-32 h-5" />
                        </div>
                        <div className="flex gap-1 md:gap-2 shrink-0">
                            <Skeleton className="w-8 h-8 rounded-md" />
                            <Skeleton className="w-8 h-8 rounded-md" />
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row flex-1 overflow-hidden border bg-white dark:bg-[#0a0f13]">
                        <div className="flex flex-col w-full xl:w-2/3 h-1/2 xl:h-full border-b xl:border-b-0 xl:border-r">
                            <div className="flex border-b">
                                <div className="px-6 py-3"><Skeleton className="w-24 h-5" /></div>
                                <div className="px-6 py-3"><Skeleton className="w-32 h-5" /></div>
                            </div>
                            <div className="flex-1 p-5 space-y-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <Skeleton className="w-16 h-4 shrink-0" />
                                        <Skeleton className="w-full h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col w-full xl:w-1/3 h-1/2 xl:h-full bg-white dark:bg-[#0a0f13]">
                            <div className="px-5 py-[13px] border-b flex items-center">
                                <Skeleton className="w-24 h-5" />
                            </div>
                            <div className="flex-1 p-4 space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white dark:bg-[#161a21] border rounded-lg px-4 py-6 shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <Skeleton className="w-16 h-5 rounded-full" />
                                            <Skeleton className="w-16 h-4" />
                                        </div>
                                        <Skeleton className="w-3/4 h-5 mt-2 mb-2" />
                                        <Skeleton className="w-full h-4 mb-2" />
                                        <Skeleton className="w-full h-3" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    if (!scan) {
        return (
            <div className="flex justify-center items-center h-full min-h-[500px]">
                <Loader2 className="h-8 w-8 animate-spin text-teal-500" />
            </div>
        );
    }

    const renderHighlightedMessage = (message: string, highlights: string[] = []) => {
        let highlightedMessage: React.ReactNode[] = [message];

        highlights.forEach((highlight) => {
            const isError = highlight.includes("**");
            const text = highlight.replace(/\*\*/g, "");

            const newItems: React.ReactNode[] = [];
            highlightedMessage.forEach((segment) => {
                if (typeof segment === 'string') {
                    const parts = segment.split(highlight);
                    parts.forEach((part, i) => {
                        newItems.push(part);
                        if (i < parts.length - 1) {
                            newItems.push(
                                <span key={`${text}-${i}`} className={isError ? "text-red-500 font-bold" : "text-teal-400 font-medium"}>
                                    {text}
                                </span>
                            );
                        }
                    });
                } else {
                    newItems.push(segment);
                }
            });
            highlightedMessage = newItems;
        });

        return highlightedMessage;
    };

    return (
        <div className="space-y-6 max-w-full lg:pl-8 mx-auto pb-10 xl:pb-12 relative">

            <Card className="p-4 lg:p-8 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-[#161a21]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    <div className="flex justify-center shrink-0 lg:pr-12">
                        <ProgressCircle progress={scan.progress === 100 ? (scan.name === "Active Recon" ? 0 : 0) : scan.progress} size={110} className="w-[120px]" />
                    </div>

                    <div className="hidden lg:block border-l border-neutral-200 dark:border-neutral-800/80 h-44 w-3" />
                    <div className="block lg:hidden border-t border-neutral-200 dark:border-neutral-800/80 w-full h-[1px]" />

                    <div className="flex flex-col w-full gap-6 lg:gap-8">
                        <div className="w-full overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                            <div className="flex justify-between relative mt-2 z-0 min-w-[500px] lg:min-w-0">
                                <div className="absolute top-6 lg:top-7 left-[30px] right-[30px] lg:left-[60px] lg:right-[60px] h-[2px] bg-neutral-200 dark:bg-neutral-800/80 -z-10" />
                                {STEPS.map((step, index) => (
                                    <div key={step.id} className="flex flex-col items-center gap-2 lg:gap-3 w-[80px] lg:w-[120px]">
                                        <div
                                            className={cn(
                                                "w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border transition-colors",
                                                index === 0
                                                    ? "bg-teal-500 text-white border-transparent ring-[4px] lg:ring-[6px] ring-teal-500/20"
                                                    : "bg-white border-neutral-200 text-muted-foreground dark:bg-[#0B1015] dark:border-[#1E242B]"
                                            )}
                                        >
                                            {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-4 h-4 lg:w-5 lg:h-5" })}
                                        </div>
                                        <span className={cn(
                                            "text-[11px] lg:text-[13px] font-medium tracking-wide",
                                            index === 0 ? "text-foreground" : "text-muted-foreground"
                                        )}>
                                            {step.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 pt-4 border-t">
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-muted-foreground uppercase">Scan Type</span>
                                <p className="font-medium text-sm">{scan.type}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-muted-foreground uppercase">Targets</span>
                                <p className="font-bold text-sm">{scan.details.targets}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-muted-foreground uppercase">Started At</span>
                                <p className="font-bold text-sm">{scan.details.startedAt}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-muted-foreground uppercase">Credentials</span>
                                <p className="font-bold text-sm">{scan.details.credentials} Active</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-muted-foreground uppercase">Checklists</span>
                                <p className="font-bold text-teal-500 text-sm">{scan.details.checklists}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="mt-6 flex flex-col h-[800px] lg:h-[700px] overflow-hidden border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-[#161a21]">
                <div className="flex items-center justify-between border-b px-4 py-3 bg-gray-50 dark:bg-[#161a21]">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse shrink-0" />
                        <h3 className="font-semibold text-sm truncate">Live Scan Console</h3>
                        <span className="hidden sm:flex ml-2 md:ml-4 text-xs font-medium text-muted-foreground items-center gap-1.5 px-2.5 py-1 rounded-full border bg-[#f0f0f0] dark:bg-[#0a0f13] whitespace-nowrap">
                            <AlarmClock className="w-4 h-4" />
                            Running...
                        </span>
                    </div>
                    <div className="flex gap-1 md:gap-2 shrink-0">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronDown className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><X className="h-4 w-4" /></Button>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row flex-1 overflow-hidden border bg-white dark:bg-[#0a0f13]">
                    <div className="flex flex-col w-full xl:w-2/3 h-1/2 xl:h-full border-b xl:border-b-0 xl:border-r">
                        <div className="flex border-b">
                            <button
                                className={cn("px-6 py-3 text-sm font-medium border-b-2 transition-colors", activeTab === "activity" ? "border-teal-500 text-teal-500" : "border-transparent text-muted-foreground hover:text-foreground")}
                                onClick={() => setActiveTab("activity")}
                            >
                                Activity Log
                            </button>
                            <button
                                className={cn("px-6 py-3 text-sm font-medium border-b-2 transition-colors", activeTab === "verification" ? "border-teal-500 text-teal-500" : "border-transparent text-muted-foreground hover:text-foreground")}
                                onClick={() => setActiveTab("verification")}
                            >
                                Verification Loops
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto text-gray-300 p-5 font-mono text-[13px] leading-relaxed">
                            {scan.logs.length > 0 ? (
                                <div className="space-y-4">
                                    {scan.logs.map((log, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-gray-500 shrink-0">[{log.timestamp}]</span>
                                            <div className="flex-1 wrap-break-word">
                                                {log.message.includes("\n") ? (
                                                    <div className="whitespace-pre-wrap pl-2 border-l-2 border-slate-700 mt-1 mb-1 dark:text-gray-400 text-gray-700">
                                                        {renderHighlightedMessage(log.message, log.highlights)}
                                                    </div>
                                                ) : (
                                                    <span className="dark:text-gray-400 text-gray-700">{renderHighlightedMessage(log.message, log.highlights)}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center text-muted-foreground">
                                    <div className="text-center space-y-2">
                                        <p>Awaiting logs...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-full xl:w-1/3 h-1/2 xl:h-full bg-white dark:bg-[#0a0f13]">
                        <div className="px-5 py-[13px] border-b flex items-center">
                            <h3 className="font-semibold text-sm">Finding Log</h3>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {scan.findings.length > 0 ? (
                                scan.findings.map((finding) => (
                                    <div key={finding.id} className="bg-white dark:bg-[#161a21] border rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-2">
                                            <SeverityBadge severity={finding.severity} />
                                            <span className="text-xs text-muted-foreground font-medium">{finding.timestamp}</span>
                                        </div>
                                        <h4 className="font-semibold text-[15px] mt-2 mb-1 leading-tight">{finding.title}</h4>
                                        <p className="text-xs font-mono text-teal-600 dark:text-teal-400 mb-2">{finding.path}</p>
                                        <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">
                                            {finding.description}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                        <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-foreground">No findings yet</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Vulnerabilities will appear here as they are discovered by the active scan.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Card>

            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10">
                <div className="border-t border-[#e4e4e7] dark:border-[#27272a] p-2 text-[10px] md:text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center px-4 gap-2 md:gap-0">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Sub-Agents: 0</span>
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-teal-500/50" /> Parallel Executions: 2</span>
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Operations: 1</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <span className="text-red-500 font-medium">Critical: {scan.vulnerabilities.critical}</span>
                        <span className="text-orange-500 font-medium">High: {scan.vulnerabilities.high}</span>
                        <span className="text-yellow-500 font-medium">Medium: {scan.vulnerabilities.medium}</span>
                        <span className="text-green-500 font-medium">Low: {scan.vulnerabilities.low}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
