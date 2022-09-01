import { UiElement, UiElementStructureType } from "./ui-element-structure.model";

export class CollectorUiElement<T> extends UiElement<T> {
    children: UiElement<T>[];

    constructor(id: string, children: UiElement<T>[]) {
        super(id);
        super.type = UiElementStructureType.Collection;
        this.children = children;
    }

    getRef(): CollectorUiElement<T>{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }
}
