import { defineTool } from "@lovable.dev/mcp-js";

const packages = [
  { code: "HSI-001", name: "Secure Network & AI Trust Readiness Audit", duration: "10 business days", who: "CTOs, IT Directors, MSPs", scope: "Network / access / cloud / logging / AI inventory and review.", outcome: "Top-10 findings, prioritized 90-day roadmap, evidence pack.", best: "Facing a security questionnaire, audit prep, a cloud move, or a flat/messy network." },
  { code: "HSI-002", name: "Firewall Rule Cleanup & Segmentation Sprint", duration: "4-6 weeks", who: "IT Directors, MSPs", scope: "Zone model design, rule-base audit, cutover plan, logging design.", outcome: "Cleaned rule base, least-privilege business flows, logging evidence.", best: "Years of accumulated any-any rules and unclear blast radius." },
  { code: "HSI-003", name: "Hybrid Cloud Network Security Baseline", duration: "3-5 weeks", who: "Cloud / DevOps / CTO", scope: "AWS / Azure VPC + VNet review, route tables, SG/NSG, peering, flow logs.", outcome: "Documented reachability, segmentation gaps closed, logging baseline.", best: "Post-migration and no one can prove what's reachable or logged." },
  { code: "HSI-004", name: "ZTNA / VPN & Admin Access Hardening", duration: "3-4 weeks", who: "CIO, IT, remote-heavy teams", scope: "Identity-controlled access design, jump-host architecture, AAA review.", outcome: "Brokered admin access, no flat VPN landings, logged sessions.", best: "Remote admins land directly on the internal network." },
  { code: "HSI-005", name: "Network Visibility & SIEM Starter", duration: "3-5 weeks", who: "Security / IT / MSP", scope: "Firewall / VPN / identity / cloud log pipeline, starter detections, dashboard.", outcome: "Working alerts on the highest-signal events, evidence retention.", best: "Logs exist but nothing turns them into alerts." },
  { code: "HSI-006", name: "AI Guardrail & Data-Use Review", duration: "3-4 weeks", who: "AI-enabled SaaS, legal/compliance", scope: "AI inventory, data classes, prompt + tool risk review, policy controls.", outcome: "Documented guardrails, logging design, and a defensible control narrative.", best: "Rolling out an AI assistant that touches customer or regulated data." },
  { code: "HSI-007", name: "MSP White-Label Assessment", duration: "Per-engagement", who: "MSP / vCISO / compliance partners", scope: "Repeatable assessment your team can resell under your brand.", outcome: "Senior network-security capacity, branded deliverables.", best: "You own client trust but need senior network-security capacity." },
];

export default defineTool({
  name: "list_engagements",
  title: "List engagements",
  description: "List Herman Stone INC's fixed-scope engagement packages (HSI-001 through HSI-007), each with duration, scope, target audience, and outcome.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(packages, null, 2) }],
    structuredContent: { engagements: packages },
  }),
});