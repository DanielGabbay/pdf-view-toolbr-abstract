import { UiElementTiggerable, UiElementStructureType } from "./ui-element-structure.model";
import { Validators } from "@angular/forms";


export class InputUiStruct<K extends 'text' | 'number' | 'email'> extends UiElementTiggerable<string> {
    inputType: K;
    materialValidationArray: Validators[];

    constructor(id: string, materialValidationArray?: Validators[]) {
        super(id);
        super.type = UiElementStructureType.Input;
        this.materialValidationArray = materialValidationArray;
    }


    getRef(): InputUiStruct<K> {
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }

    get needValidation(): boolean {
        return this.materialValidationArray && this.materialValidationArray.length > 0;
    }

    onEventFn(event: InputEvent | HTMLInputElement) {
        if (event instanceof InputEvent) {
            this.value = ((event as any).target as HTMLInputElement).value;
            this.onEventSubject.next(this.value)
        } else if (event instanceof HTMLInputElement) {
            this.value = event.value;
            this.onEventSubject.next(this.value)
        }
    }


}

