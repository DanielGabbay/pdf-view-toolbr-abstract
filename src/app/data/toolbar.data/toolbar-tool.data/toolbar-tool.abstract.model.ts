import {ToolbarToolCategory} from './toolbar-tool-category.type';
import {UiElement} from "../../ui-element-structures.models/ui-element-structure.model";

export abstract class ToolbarTool {
    toolCategory: ToolbarToolCategory;
    id: string;
    labelTranslationId: string;

    uiElements: UiElement<any>[] = []


    protected constructor(toolCategory: ToolbarToolCategory, id: string, labelTranslationId: string) {
        this.toolCategory = toolCategory;
        this.id = id;
        this.labelTranslationId = labelTranslationId;
    }

    /**
     * פונקציית אירוע
     * פונקציה שמאתחלת את האלמנטים הבנים
     */

}

export abstract class OperationTool extends ToolbarTool {

}
