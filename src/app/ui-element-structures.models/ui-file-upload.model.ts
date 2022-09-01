import { UiElementStructureType, UiElementTiggerable } from "./ui-element-structure.model";

export class FileUploadUiStruct extends UiElementTiggerable<FileUploadUiStruct> {
    file: File;

    acceptArr: string[] = [];
    get accepts(): string {
        if(this.acceptArr.length === 0) return '';
        return this.acceptArr.join(', ');
    }

    /**
     * user    The user-facing camera and/or microphone should be used.
     * environment    The outward-facing camera and/or microphone should be used
     */
    capture: 'user' | 'environment' | '' = '';

    multiple: boolean = false;


    constructor(id: string) {
        super(id);
        super.type = UiElementStructureType.File;
    }

    getRef(): FileUploadUiStruct{
        if (this.id) {
            return this;
        }
        throw new Error('getRef(): element was not initialized');
    }

    onEventFn(event: any) {
        this.onEventSubject.next(this)
    }

    /**
     * Format bytes as human-readable text.
     *
     * @param bytes Number of bytes.
     * @param si True to use metric (SI) units, aka powers of 1000. False to use
     *           binary (IEC), aka powers of 1024.
     * @param dp Number of decimal places to display.
     *
     * @return Formatted string.
     */
    humanFileSize(bytes, si = true, dp = 1) {
        const thresh = si ? 1000 : 1024;

        if (Math.abs(bytes) < thresh) {
            return bytes + ' B';
        }

        const units = si
                ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10 ** dp;

        do {
            bytes /= thresh;
            ++u;
        } while (
                Math.round(Math.abs(bytes) * r) / r >= thresh &&
                u < units.length - 1
                );

        return bytes.toFixed(dp) + ' ' + units[u];
    }
}

