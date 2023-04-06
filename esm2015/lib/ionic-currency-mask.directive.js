import { Attribute, Directive } from '@angular/core';
import { NgModel } from '@angular/forms';
export class CurrencyMaskDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtY3VycmVuY3ktbWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90aGlhZ29wcnovaW9uaWMtY3VycmVuY3ktbWFzay9zcmMvbGliL2lvbmljLWN1cnJlbmN5LW1hc2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVV2QyxNQUFNLE9BQU8scUJBQXFCO0lBWWhDOzs7T0FHRztJQUNILFlBQW1CLEtBQWMsRUFDQyxPQUFlLEVBQ2QsUUFBZ0I7UUFGaEMsVUFBSyxHQUFMLEtBQUssQ0FBUztRQWRqQzs7V0FFRztRQUNILFlBQU8sR0FBVyxHQUFHLENBQUM7UUFFdEI7O1dBRUc7UUFDSCxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBU3JCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxxQkFBcUI7b0JBQ2hDLGFBQWEsRUFBRSxxQkFBcUI7aUJBQ3JDO2dCQUNELFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNyQjs7O1lBVE8sT0FBTzt5Q0EyQkEsU0FBUyxTQUFDLFNBQVM7eUNBQ25CLFNBQVMsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdHRyaWJ1dGUsIERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N1cnJlbmN5TWFza10nLFxuICBob3N0OiB7XG4gICAgJyhrZXl1cCknOiAnY2hhbmdlVmFsdWUoJGV2ZW50KScsXG4gICAgJyhpb25DaGFuZ2UpJzogJ2NoYW5nZVZhbHVlKCRldmVudCknLFxuICB9LFxuICBwcm92aWRlcnM6IFtOZ01vZGVsXVxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBEZWNpbWFsIHNlcGFyYXRvciAoZGVmYXVsdHMgdG8gXCIsXCIpXG4gICAqL1xuICBkZWNpbWFsOiBzdHJpbmcgPSAnLCc7XG5cbiAgLyoqXG4gICAqIFRob3VzYW5kIHNlcGFyYXRvciAoZGVmYXVsdHMgdG8gXCIuXCIpXG4gICAqL1xuICB0aG91c2FuZDogc3RyaW5nID0gJy4nO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1dG9yXG4gICAqIEBwYXJhbSB7TmdNb2RlbH0gbW9kZWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlbDogTmdNb2RlbCxcbiAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgnZGVjaW1hbCcpIGRlY2ltYWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgndGhvdXNhbmQnKSB0aG91c2FuZDogc3RyaW5nKSB7XG4gICAgaWYgKGRlY2ltYWwpIHtcbiAgICAgIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWw7XG4gICAgfVxuICAgIGlmICh0aG91c2FuZCkge1xuICAgICAgdGhpcy50aG91c2FuZCA9IHRob3VzYW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciBjaGFuZ2VWYWx1ZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIGNoYW5nZVZhbHVlKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgKyAnJztcbiAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL1tcXERdKy9nLCAnJykpO1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJztcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyhbMC05XXsyfSkkL2csIHRoaXMuZGVjaW1hbCArICckMScpO1xuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQodGhpcy5kZWNpbWFsKTtcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmQpO1xuICAgIHZhbHVlID0gcGFydHMuam9pbih0aGlzLmRlY2ltYWwpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZS5lbWl0KHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19