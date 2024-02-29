import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'user-theme';

  constructor() {
    this.loadTheme();
  }

  setDarkTheme(): void {
    document.body.setAttribute('cds-theme', 'dark');
    localStorage.setItem(this.themeKey, 'dark');
  }

  setLightTheme(): void {
    document.body.setAttribute('cds-theme', 'light');
    localStorage.setItem(this.themeKey, 'light');
  }

  loadTheme(): void {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme) {
      document.body.setAttribute('cds-theme', storedTheme);
    }
  }
}
