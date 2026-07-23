import { defineTool } from "@lovable.dev/mcp-js";
import { perspectives } from "@/lib/perspectives";

export default defineTool({
  name: "list_perspectives",
  title: "List perspectives",
  description: "List Herman Stone INC's published technical field notes (slug, title, date, tag, excerpt, reading time). Use get_perspective to retrieve the full body.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summaries = perspectives.map(({ slug, title, date, tag, readingTime, excerpt }) => ({
      slug, title, date, tag, readingTime, excerpt,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summaries, null, 2) }],
      structuredContent: { perspectives: summaries },
    };
  },
});