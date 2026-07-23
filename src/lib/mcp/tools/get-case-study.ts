import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getCaseStudy } from "@/lib/case-studies";

export default defineTool({
  name: "get_case_study",
  title: "Get case study",
  description: "Get the full detail of one anonymized case study by slug (e.g. `regional-healthcare-sd-wan-migration`).",
  inputSchema: { slug: z.string().describe("Case study slug from list_case_studies.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const c = getCaseStudy(slug);
    if (!c) return { content: [{ type: "text", text: `No case study with slug '${slug}'.` }], isError: true };
    return { content: [{ type: "text", text: JSON.stringify(c, null, 2) }], structuredContent: { caseStudy: c } };
  },
});