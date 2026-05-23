import { Injectable, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private readonly STORAGE_KEY = 'aurexlabs-theme';

  /** Reactive signal for current theme state */
  isDark = signal<boolean>(false);

  constructor() {
    this.initTheme();

    // React to signal changes and update DOM
    effect(() => {
      this.applyTheme(this.isDark());
    });
  }

  /** Toggle between dark and light mode */
  toggleTheme(): void {
    this.isDark.update(v => !v);
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }

  /** Initialize theme from localStorage or system preference */
  private initTheme(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);

    if (stored) {
      this.isDark.set(stored === 'dark');
    } else {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(prefersDark);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually chosen
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.isDark.set(e.matches);
      }
    });
  }

  /** Apply theme class to <html> element */
  private applyTheme(isDark: boolean): void {
    const html = this.document.documentElement;
    if (isDark) {
      html.classList.add('dark-theme');
      html.classList.remove('light-theme');
    } else {
      html.classList.add('light-theme');
      html.classList.remove('dark-theme');
    }
  }
}
