import { defineTool } from "@lovable.dev/mcp-js";
import { caseStudies } from "@/lib/case-studies";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description: "List anonymized case studies (sector + size only, no client names) with situation, constraint, action, and confirmed outcome metrics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(caseStudies, null, 2) }],
    structuredContent: { caseStudies },
  }),
});