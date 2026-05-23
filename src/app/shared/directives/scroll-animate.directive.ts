import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  /** Animation class to apply. Defaults to 'animate-on-scroll' */
  @Input() appScrollAnimate: string = 'animate-on-scroll';

  /** Intersection threshold (0 to 1) */
  @Input() threshold: number = 0.15;

  /** Optional delay in ms */
  @Input() animateDelay: number = 0;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;
    element.classList.add(this.appScrollAnimate);

    if (this.animateDelay) {
      element.style.transitionDelay = `${this.animateDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after animation (one-time)
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
