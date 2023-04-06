import { Directive, Attribute, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

class CurrencyMaskDirective {
    /**
     * Construtor
     * @param {NgModel} model
     */
    constructor(model, decimal, thousand) {
        this.model = model;
        /**
         * Decimal separator (defaults to ",")
         */
        this.decimal = ',';
        /**
         * Thousand separator (defaults to ".")
         */
        this.thousand = '.';
        if (decimal) {
            this.decimal = decimal;
        }
        if (thousand) {
            this.thousand = thousand;
        }
    }
    /**
     * Listener changeValue
     * @param event
     */
    changeValue(event) {
        let value = event.target.value;
        if (value == '') {
            return;
        }
        value = value + '';
        value = parseInt(value.replace(/[\D]+/g, ''));
        value = value + '';
        value = value.replace(/([0-9]{2})$/g, this.decimal + '$1');
        var parts = value.toString().split(this.decimal);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousand);
        if(parts[0] === '') {
            parts[0] = 0;
        }
        value = parts.join(this.decimal);
        if(isNaN(value)) {
            value = 0;
        }
        event.target.value = value;
        this.model.update.emit(value);
        return true;
    }
}
CurrencyMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[currencyMask]',
                host: {
                    '(keyup)': 'changeValue($event)',
                    '(ionChange)': 'changeValue($event)',
                },
                providers: [NgModel]
            },] }
];
CurrencyMaskDirective.ctorParameters = () => [
    { type: NgModel },
    { type: String, decorators: [{ type: Attribute, args: ['decimal',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['thousand',] }] }
];

class IonicCurrencyMaskModule {
}
IonicCurrencyMaskModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CurrencyMaskDirective],
                imports: [],
                exports: [CurrencyMaskDirective]
            },] }
];

/*
 * Public API Surface of ionic-currency-mask
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CurrencyMaskDirective, IonicCurrencyMaskModule };
//# sourceMappingURL=thiagoprz-ionic-currency-mask.js.map
