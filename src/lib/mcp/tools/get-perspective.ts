import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getPerspective } from "@/lib/perspectives";

export default defineTool({
  name: "get_perspective",
  title: "Get perspective",
  description: "Get the full body of one perspective essay by slug, including headings, paragraphs, pull-quotes, and lists.",
  inputSchema: { slug: z.string().describe("Perspective slug from list_perspectives.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const p = getPerspective(slug);
    if (!p) return { content: [{ type: "text", text: `No perspective with slug '${slug}'.` }], isError: true };
    return { content: [{ type: "text", text: JSON.stringify(p, null, 2) }], structuredContent: { perspective: p } };
  },
});