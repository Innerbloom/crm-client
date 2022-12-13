import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private renderer: Renderer2;

  public theme: Theme = 'light-theme';

  constructor(@Inject(DOCUMENT) private document: Document,
              rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null , null);
  }

    switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ?
        (this.theme = 'dark-theme') : (this.theme = 'light-theme')
    )
    localStorage.setItem('theme', this.theme);
  }

  initializeTheme = (): void =>
      this.renderer.addClass(this.document.body, this.theme)

}

export type Theme = 'light-theme' | 'dark-theme'