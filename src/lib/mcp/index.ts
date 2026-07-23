import { defineMcp } from "@lovable.dev/mcp-js";
import listEngagements from "./tools/list-packages";
import listCaseStudies from "./tools/list-case-studies";
import getCaseStudyTool from "./tools/get-case-study";
import listPerspectivesTool from "./tools/list-perspectives";
import getPerspectiveTool from "./tools/get-perspective";
import firmInfoTool from "./tools/firm-info";

export default defineMcp({
  name: "herman-stone-mcp",
  title: "Herman Stone INC",
  version: "0.1.0",
  instructions:
    "Public marketing content for Herman Stone INC, a senior network engineering and security consulting practice. Use `list_engagements` for the fixed-scope engagement catalog (HSI-001 to HSI-007), `list_case_studies` / `get_case_study` for anonymized delivery references, `list_perspectives` / `get_perspective` for technical field notes, and `firm_info` for firm identity and contact details. All tools are read-only.",
  tools: [
    listEngagements,
    listCaseStudies,
    getCaseStudyTool,
    listPerspectivesTool,
    getPerspectiveTool,
    firmInfoTool,
  ],
});