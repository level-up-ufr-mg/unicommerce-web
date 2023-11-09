import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
export let DarkenOnHoverDirective = class DarkenOnHoverDirective {
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this.brightness = '70%';
    }
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
};
__decorate([
    Input()
], DarkenOnHoverDirective.prototype, "brightness", void 0);
__decorate([
    HostListener('mouseover')
], DarkenOnHoverDirective.prototype, "darkenOn", null);
__decorate([
    HostListener('mouseleave')
], DarkenOnHoverDirective.prototype, "darkenOff", null);
DarkenOnHoverDirective = __decorate([
    Directive({
        selector: '[apDarkenOnHover]'
    })
], DarkenOnHoverDirective);
//# sourceMappingURL=darken-on-hover.directive.js.map