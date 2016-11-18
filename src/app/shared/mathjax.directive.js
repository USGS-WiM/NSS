"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var MathJaxDirective = (function () {
    function MathJaxDirective(el) {
        this.el = el;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
    __decorate([
        core_1.Input('MathJax')
    ], MathJaxDirective.prototype, "fractionString", void 0);
    MathJaxDirective = __decorate([
        core_1.Directive({ selector: '[MathJax]' }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], MathJaxDirective);
    return MathJaxDirective;
}());
exports.MathJaxDirective = MathJaxDirective;
//# sourceMappingURL=mathjax.directive.js.map