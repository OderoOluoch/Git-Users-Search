// Import the core angular services.
import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  NgZone,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hesitate]',
  inputs: ['duration'],
  outputs: ['hesitateEvents: hesitate'],
  exportAs: 'hesitation',
})
export class HesitateDirective implements OnInit, OnDestroy {
  public duration: number;
  public hesitateEvents: EventEmitter<void>;

  private elementRef: ElementRef;
  private renderer: Renderer2;
  private unlisteners: Function[] | null;
  private timer: any;
  private zone: NgZone;

  constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;

    this.duration = 2000;
    this.hesitateEvents = new EventEmitter();
    this.timer = 0;
    this.unlisteners = null;
  }

  public cancel(): void {
    clearTimeout(this.timer);
  }

  public ngOnDestroy(): void {
    this.cancel();

    if (this.unlisteners) {
      for (var unlistener of this.unlisteners) {
        unlistener();
      }
    }
  }

  public ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.unlisteners = [
        this.renderer.listen(
          this.elementRef.nativeElement,
          'mouseenter',
          this.handleMouseenter
        ),
        this.renderer.listen(
          this.elementRef.nativeElement,
          'mousedown',
          this.handleMousedown
        ),
        this.renderer.listen(
          this.elementRef.nativeElement,
          'mouseleave',
          this.handleMouseleave
        ),
      ];
    });
  }

  private handleMousedown = (event: MouseEvent): void => {
    this.cancel();
  };

  private handleMouseenter = (event: MouseEvent): void => {
    this.timer = setTimeout(this.handleTimerThreshold, this.duration);
  };

  private handleMouseleave = (event: MouseEvent): void => {
    this.cancel();
  };

  private handleTimerThreshold = (): void => {
    this.zone.runGuarded(() => {
      this.hesitateEvents.emit();
    });
  };
}
