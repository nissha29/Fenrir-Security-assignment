# Fenrir Web App

This is a frontend internship assignment for implementing a B2B SaaS Security Platform built with Next.js and Tailwind CSS. 

## Overview
It's a responsive React application featuring:
- A clean, split-layout login/signup page.
- A functional dashboard displaying scanning results, metrics, filters, and search.
- An active scan view with simulated live CLI logs and security finding reports.
- Full dark/light theme switching.

## What's inside the code?
To keep things clean, I separated the code into specific zones:
- `app/` - Handles all the app routing. You'll find the auth screens directly in here, and the dashboard with the specific scan views under `/dashboard` and `/dashboard/scans/[id]`.
- `components/` - Stores all the reusable UI widgets. This keeps the components totally uniform and helps avoid repetitive styling. 
- `data/` - Holds all the static `mock.ts` data to make the UI tick.
- `layout/` - Wraps pages in consistent layout styles like sidebars and navbars, so it doesn't have to be written out a hundred times.

## Setup
First, make sure to install the project dependencies:
```bash
npm install
```

Then start the application locally:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to check it out.
