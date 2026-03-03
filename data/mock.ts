export type Severity = "Critical" | "High" | "Medium" | "Low";
export type ScanStatus = "Completed" | "Scheduled" | "Failed" | "Running";

export interface Vulnerability {
    id: string;
    severity: Severity;
    timestamp: string;
    title: string;
    path: string;
    description: string;
}

export interface LogEntry {
    timestamp: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
    highlights?: string[];
}

export interface Scan {
    id: string;
    name: string;
    type: "Greybox" | "Blackbox" | "Whitebox";
    status: ScanStatus;
    progress: number;
    lastScan: string;
    vulnerabilities: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    details: {
        targets: string;
        startedAt: string;
        credentials: number;
        files: string;
        checklists: string;
    };
    logs: LogEntry[];
    findings: Vulnerability[];
}

export const mockScans: Scan[] = [
    {
        id: "scan-1",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: {
            targets: "google.com",
            startedAt: "Nov 22, 09:00AM",
            credentials: 2,
            files: "Control.pdf",
            checklists: "40/350",
        },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-2",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: { targets: "api.democorp.com", startedAt: "Nov 22, 10:00AM", credentials: 1, files: "api_spec.yml", checklists: "350/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-3",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: { targets: "staging.democorp.com", startedAt: "Nov 22, 11:00AM", credentials: 0, files: "None", checklists: "350/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-4",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: { targets: "internal.democorp.com", startedAt: "Nov 22, 12:00PM", credentials: 3, files: "schema.sql", checklists: "350/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-5",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: { targets: "corp.democorp.com", startedAt: "Nov 22, 01:00PM", credentials: 1, files: "None", checklists: "350/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-6",
        name: "Web App Servers",
        type: "Greybox",
        status: "Completed",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        details: { targets: "vpn.democorp.com", startedAt: "Nov 22, 02:00PM", credentials: 0, files: "None", checklists: "350/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-7",
        name: "Web App Servers",
        type: "Greybox",
        status: "Scheduled",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
        details: { targets: "backup.democorp.com", startedAt: "Pending", credentials: 0, files: "None", checklists: "0/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-8",
        name: "Web App Servers",
        type: "Greybox",
        status: "Scheduled",
        progress: 100,
        lastScan: "4d ago",
        vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
        details: { targets: "mail.democorp.com", startedAt: "Pending", credentials: 0, files: "None", checklists: "0/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-9",
        name: "IoT Devices",
        type: "Blackbox",
        status: "Failed",
        progress: 10,
        lastScan: "3d ago",
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        details: { targets: "192.168.1.0/24", startedAt: "Nov 23, 09:00AM", credentials: 0, files: "None", checklists: "15/50" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-10",
        name: "Temp Data",
        type: "Blackbox",
        status: "Failed",
        progress: 10,
        lastScan: "3d ago",
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        details: { targets: "10.0.0.0/8", startedAt: "Nov 23, 10:00AM", credentials: 0, files: "None", checklists: "10/50" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    },
    {
        id: "scan-11",
        name: "Active Recon",
        type: "Whitebox",
        status: "Running",
        progress: 45,
        lastScan: "Just now",
        vulnerabilities: { critical: 0, high: 1, medium: 3, low: 5 },
        details: { targets: "github.com/democorp", startedAt: "Nov 26, 08:00AM", credentials: 1, files: "source.zip", checklists: "120/350" },
        logs: [
            { timestamp: "09:00:00", message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.", type: "info", highlights: ["helpdesk.democorp.com"] },
            { timestamp: "09:01:00", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
            { timestamp: "09:02:00", message: "Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.", type: "info" },
            { timestamp: "09:03:00", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.", type: "success", highlights: ["\"TODO: Delete the testing account (test:test)\"", "/password/test"] },
            { timestamp: "09:04:00", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.", type: "warning", highlights: ["/password/test", "'#'"] },
            { timestamp: "09:05:00", message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info", highlights: ["/password/test", "/api", "test:test"] },
            { timestamp: "09:06:00", message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success", highlights: ["'X-UserId: 10032'", "**IDOR vulnerability**"] },
        ],
        findings: [
            { id: "vuln-1", severity: "Critical", timestamp: "18:45:23", title: "SQL Injection in Authentication Endpoint", path: "/api/users/profile", description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access." },
            { id: "vuln-2", severity: "High", timestamp: "18:45:23", title: "Unauthorized Access to User Metadata", path: "/api/auth/login", description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing." },
            { id: "vuln-3", severity: "Medium", timestamp: "18:45:23", title: "Broken Authentication Rate Limiting", path: "/api/search", description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible." }
        ]
    }
];

export const metricsSummary = {
    critical: { count: 86, trend: "+2% increase than yesterday", trendUp: true },
    high: { count: 16, trend: "+0.9% increase than yesterday", trendUp: true },
    medium: { count: 26, trend: "-0.9% decrease than yesterday", trendUp: false },
    low: { count: 16, trend: "+0.9% increase than yesterday", trendUp: true }
};
