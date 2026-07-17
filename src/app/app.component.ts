import { Component, inject, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Subscription, filter, map, mergeMap } from 'rxjs';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './core/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AurexLabs Portfolio';

  private router = inject(Router);
  private loader = inject(LoaderService);
  private meta = inject(Meta);
  private activatedRoute = inject(ActivatedRoute);
  private routerSub!: Subscription;
  private seoSub!: Subscription;

  private readonly BASE_URL = 'https://aurexlabs.com';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Loader logic
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.show();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loader.hide();
      }
    });

    // Dynamic SEO meta updates on route change
    this.seoSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.updateMeta(data);
    });
  }

  private updateMeta(data: Record<string, any>): void {
    const description = data['description'];
    const ogTitle = data['ogTitle'];
    const ogDescription = data['ogDescription'];
    const canonicalPath = data['canonicalPath'] || '/';

    // Update meta description
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }

    // Update Open Graph tags
    if (ogTitle) {
      this.meta.updateTag({ property: 'og:title', content: ogTitle });
      this.meta.updateTag({ name: 'twitter:title', content: ogTitle });
    }

    if (ogDescription) {
      this.meta.updateTag({ property: 'og:description', content: ogDescription });
      this.meta.updateTag({ name: 'twitter:description', content: ogDescription });
    }

    // Update OG URL
    const fullUrl = this.BASE_URL + canonicalPath;
    this.meta.updateTag({ property: 'og:url', content: fullUrl });

    // Update canonical link
    if (isPlatformBrowser(this.platformId)) {
      this.updateCanonicalUrl(fullUrl);
    }
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.seoSub?.unsubscribe();
  }
}