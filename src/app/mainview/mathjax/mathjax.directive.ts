import {Directive, ElementRef, Input, Inject, Renderer} from '@angular/core';

declare var MathJax: {
    Hub: {
        Queue: (param: Object[]) => void;
    }
}

@Directive({ selector: '[MathJax]' })

export class MathJaxDirective {
    @Input('MathJax') fractionString: string;

    constructor( @Inject(ElementRef) private el: ElementRef) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
}