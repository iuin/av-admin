import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[wizardMaximized]',
})
export class WizardMaximizedDirective implements OnInit {
    private modalElement: Element;
    private hostTagName: string;
    constructor(el: ElementRef, private renderer: Renderer2) {
        this.modalElement = el.nativeElement;
        this.hostTagName = this.modalElement.tagName;
    }

    ngOnInit() {
        const observer = new MutationObserver((mutations, observe) => {
            if (mutations.length > 0 && this.hostTagName === 'CLR-WIZARD') {
                const wizardOpen = (<Element>mutations[0].target).classList.contains('open');
                if (wizardOpen) {
                    if (this.modalElement.firstChild.childNodes.length > 1) {
                        const div: HTMLDivElement = <HTMLDivElement>this.modalElement.firstChild.childNodes[1];
                        if (div) {
                            const content = <HTMLDivElement>div.firstChild;
                            const modalHeader = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-header'))[0];
                            const button: Element = this.renderer.createElement('button');
                            button.classList.add('close');
                            button.innerHTML = '<clr-icon shape="window-max"></clr-icon>';
                            button.addEventListener('click', () => {
                                const shape = button.firstElementChild.getAttribute('shape');
                                if ('window-restore' === shape) {
                                    this.winRestore(div);
                                    button.firstElementChild.setAttribute('shape', 'window-max');
                                } else {
                                    this.winMax(div);
                                    button.firstElementChild.setAttribute('shape', 'window-restore');
                                }
                            });
                            this.renderer.setAttribute(button, 'style', 'margin-right:16px');
                            this.renderer.setAttribute(modalHeader.lastElementChild, 'style', 'flex-grow: 1');
                            this.renderer.insertBefore(modalHeader, button, modalHeader.lastElementChild);
                        }
                    }
                }
            }
        });
        observer.observe(this.modalElement.firstChild, { childList: true });
    }

    private winMax(div: HTMLDivElement) {
        div.style.padding = '0px';
        const content = <HTMLDivElement>div.firstChild;
        content.style.height = '100vh';
        content.style.width = '100%';
        const modalContent = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-content'))[0];
        const modalNav = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-nav'))[0];
        modalNav.style.maxHeight = '100vh';
        modalContent.style.maxHeight = '100vh';
    }

    private winRestore(div: HTMLDivElement) {
        div.style.padding = '';
        const content = <HTMLDivElement>div.firstChild;
        content.style.height = '75vh';
        content.style.width = '';
        const modalContent = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-content'))[0];
        const modalNav = <HTMLElement>(<HTMLCollection>content.getElementsByClassName('modal-nav'))[0];
        modalNav.style.maxHeight = '75vh';
        modalContent.style.maxHeight = '75vh';
    }
}
