import { defineTool } from "@lovable.dev/mcp-js";
import { firm } from "@/lib/firm-config";

export default defineTool({
  name: "firm_info",
  title: "Firm info",
  description: "Public firm facts for Herman Stone INC: legal name, entity, region, contact email/phone/address, NAICS codes, NPI, and current engagement-acceptance status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(firm, null, 2) }],
    structuredContent: { firm },
  }),
});