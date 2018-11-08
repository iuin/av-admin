import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[avCardToggle]'
})
export class CardToggleDirective implements OnInit {

    hostElement: HTMLDivElement;

    constructor(ele: ElementRef, private renderer: Renderer2) {
        this.hostElement = ele.nativeElement;
    }

    ngOnInit() {
        let span: HTMLSpanElement= this.renderer.createElement('span');
        span.style.cssFloat = 'right';
        span.innerHTML = `<clr-icon shape="angle" style="color:#007db8;" dir="up"></clr-icon>`;
        this.hostElement.addEventListener('click', () => {
            let isUp = span.firstElementChild.getAttribute('dir') === 'up';
            span.firstElementChild.setAttribute('dir', isUp ? 'down' : 'up');
            let nextElement = this.hostElement.nextElementSibling;
            if (nextElement) {
                nextElement.setAttribute('style', `display: ${isUp?'none':'block'}`);
            }
        });
        this.hostElement.style.cursor = 'pointer';
        this.renderer.appendChild(this.hostElement, span);
    }

}
