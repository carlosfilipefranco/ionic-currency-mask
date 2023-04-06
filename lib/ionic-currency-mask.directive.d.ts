import { NgModel } from '@angular/forms';
export declare class CurrencyMaskDirective {
    model: NgModel;
    /**
     * Decimal separator (defaults to ",")
     */
    decimal: string;
    /**
     * Thousand separator (defaults to ".")
     */
    thousand: string;
    /**
     * Construtor
     * @param {NgModel} model
     */
    constructor(model: NgModel, decimal: string, thousand: string);
    /**
     * Listener changeValue
     * @param event
     */
    changeValue(event: any): true | undefined;
}
