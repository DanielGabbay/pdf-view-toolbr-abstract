import { UiElementStructureType, UiElementIterable } from "./ui-element-structure.model";

export class DropDownUiStruct extends UiElementIterable<Array<string>, string> {

    constructor(id: string) {
        super(id);
        super.type = UiElementStructureType.DropDown;
    }


    onEventFn(event: string) {
        this.value = event;
        this.onEventSubject.next(event)

    }


    getRef(): DropDownUiStruct{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }

}
