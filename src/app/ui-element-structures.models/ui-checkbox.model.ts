import { UiElementTiggerable, UiElementStructureType } from "./ui-element-structure.model";
import { MatCheckboxChange } from "@angular/material/checkbox";

export class CheckBoxUiStruct extends UiElementTiggerable<boolean> {
    constructor(id: string) {
        super(id);
        super.type = UiElementStructureType.CheckBox;
    }

    onEventFn(event: MatCheckboxChange) {
        this.onEventSubject.next(event.checked)
    }


    getRef(): CheckBoxUiStruct{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }
}
