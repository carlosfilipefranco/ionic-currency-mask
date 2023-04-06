(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@thiagoprz/ionic-currency-mask', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.thiagoprz = global.thiagoprz || {}, global.thiagoprz['ionic-currency-mask'] = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    var CurrencyMaskDirective = /** @class */ (function () {
        /**
         * Construtor
         * @param {NgModel} model
         */
        function CurrencyMaskDirective(model, decimal, thousand) {
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
        CurrencyMaskDirective.prototype.changeValue = function (event) {
            var value = event.target.value;
            if (value == '') {
                return;
            }
            value = value + '';
            value = parseInt(value.replace(/[\D]+/g, ''));
            value = value + '';
            value = value.replace(/([0-9]{2})$/g, this.decimal + '$1');
            var parts = value.toString().split(this.decimal);
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousand);
            value = parts.join(this.decimal);
            console.log(value);
            event.target.value = value;
            this.model.update.emit(value);
            return true;
        };
        return CurrencyMaskDirective;
    }());
    CurrencyMaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[currencyMask]',
                    host: {
                        '(keyup)': 'changeValue($event)',
                        '(ionChange)': 'changeValue($event)',
                    },
                    providers: [forms.NgModel]
                },] }
    ];
    CurrencyMaskDirective.ctorParameters = function () { return [
        { type: forms.NgModel },
        { type: String, decorators: [{ type: core.Attribute, args: ['decimal',] }] },
        { type: String, decorators: [{ type: core.Attribute, args: ['thousand',] }] }
    ]; };

    var IonicCurrencyMaskModule = /** @class */ (function () {
        function IonicCurrencyMaskModule() {
        }
        return IonicCurrencyMaskModule;
    }());
    IonicCurrencyMaskModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.CurrencyMaskDirective = CurrencyMaskDirective;
    exports.IonicCurrencyMaskModule = IonicCurrencyMaskModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=thiagoprz-ionic-currency-mask.umd.js.map
