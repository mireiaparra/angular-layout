import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[rotate]',
  standalone: true,
})
export class RotateDirective {
  @Input() rotationAngle: number = 0;
  @Input() step: number = 10;


  constructor(private _renderer: Renderer2, private _element: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (event.shiftKey) {
      this.rotationAngle -= this.step;
    } else {
      this.rotationAngle += this.step;
    }
    this._applyRotation();
  }

  private _applyRotation(): void {
    this._renderer.setStyle(
      this._element.nativeElement,
      'transform',
      `rotate(${this.rotationAngle}deg)`
    );
  }
}
