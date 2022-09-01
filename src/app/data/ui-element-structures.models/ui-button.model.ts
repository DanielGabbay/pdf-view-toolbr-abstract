import { UiElementStructureType, UiElementTiggerable } from "./ui-element-structure.model";

export class ButtonUiStruct extends UiElementTiggerable<ButtonUiStruct> {
    constructor(id: string) {
        super(id);
        super.type = UiElementStructureType.Button;
    }

    onEventFn(event: MouseEvent | TouchEvent) {
        this.onEventSubject.next(this)
    }


    getRef(): ButtonUiStruct{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }

}
