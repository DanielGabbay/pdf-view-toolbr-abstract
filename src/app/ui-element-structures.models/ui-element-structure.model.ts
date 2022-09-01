import { Subject } from "rxjs";
import { Event } from "@angular/router";

export const UiElementStructureType = {
    DropDown: 'DropDown',
    Input: 'Input',
    Button: 'Button',
    CheckBox: 'CheckBox',
    Image: 'Image',
    File: 'File',
    Collection: 'Collection',
} as const;
export type UiElementStructureType =
        typeof UiElementStructureType[keyof typeof UiElementStructureType];


export abstract class UiElement<V> {
    id: string;
    label: string;
    type: UiElementStructureType;
    value: V

    protected constructor(id: string) {
        this.id = id;
    }

    abstract getRef();

}

export abstract class UiElementTiggerable<T> extends UiElement<T> {
    abstract onEventFn?<E extends Event>(event: E): void;
    abstract onEventFn?<EL extends HTMLElement>(eventElement: EL): void;

    onEventSubject?: Subject<T>;

    protected constructor(id: string) {
        super(id);
        this.onEventSubject = new Subject();
    }

    get eventSubject(): Subject<T> {
        return this.onEventSubject;
    }
}

export abstract class UiElementIterable<I extends Iterable<T>,
        T> extends UiElementTiggerable<T> {
    options: I;

    protected constructor(id: string) {
        super(id);
    }

}



