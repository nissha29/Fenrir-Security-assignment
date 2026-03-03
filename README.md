# SaaS Security Platform UI - Fenrir Assignment

Hey there! Thanks for checking out my frontend implementation for the Fenrir B2B SaaS Security Platform internship assignment. 

I've built out a responsive SaaS application entirely with React, Next.js 15, and Tailwind CSS. The focus here was capturing a clean, modern security interface while ensuring it scales smoothly across desktop, tablet, and mobile displays.

## Quick Overview
- **Authentication Screens:** Contains a sleek, split-layout design for both login and sign-up flows.
- **Security Dashboard:** The full management UI displaying a feed of active scans, alongside clean charts tracking completion and security grades.
- **Active Scan Dashboard:** I set this up to mimic an in-progress port scan. You'll see automated scrolling console logs that pull mocked networking outputs, populating low, medium, and high severity findings as it runs.
- **Theme Support:** Fully tested responsive layouts natively featuring both dark mode and light mode, gracefully toggled out of the box!

## Project Navigation (File Layout)
To make your evaluation easier and strictly modular, I set up the frontend structure closely mimicking standard NextJS scaling patterns:

*   **/app**: This holds the Next App Router routing setup.
    *   `/app/page.tsx` -> Main entry point & Auth screen.
    *   `/dashboard/page.tsx` -> Index dashboard view showing security metrics.
    *   `/dashboard/scans/[id]/page.tsx` -> Drill-down terminal views showing precise scanner details and logs.
*   **/components**: This is the heart of it all where reusable visual nodes live. Inside `ui/` are abstracted elements like skeletons, inputs, and buttons properly sized to ensure styling isn't dumped repeatedly out across the layouts.
*   **/layout**: High level shell wrappers! The `dashboard-layout.tsx` wrapper mounts standard responsive sidebar views avoiding rendering redundancies on every page load.
*   **/data**: To save you from booting a separate Backend/DB for evaluation, isolated mock context lives here such as `mock.ts` controlling UI interactions.

## How to Test the Project

I made the setup process clean and minimal. Just launch your terminals:

1. Bring the Node packages in:
```bash
npm install
```

2. Start Next's server handling the rest locally:
```bash
npm run dev
```

3. Head over to [http://localhost:3000](http://localhost:3000). Use mobile viewpoints comfortably too.

It should all spin up right away! Let me know if you need any setup configuration.
