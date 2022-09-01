import { UiElementStructureType, UiElement } from "./ui-element-structure.model";

export interface ImageElementDataStructure {
    src: string;
    dimensions: {
        width: string;
        height: string;
    }
}

export class ImageUiStruct extends UiElement<ImageElementDataStructure> {

    src: string;
    width: string;
    height: string;


    constructor(id: string) {
        super(id);
        super.type = UiElementStructureType.Image;
    }

    getRef(): ImageUiStruct{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }
}
