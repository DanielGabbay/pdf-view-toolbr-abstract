import { ToolbarToolCategory } from './toolbar-tool.types/toolbar-tool-category.type';

export abstract class ToolbarTool {
  toolCategory: ToolbarToolCategory;
  id: string;
  labelTranslationId: string;
}
