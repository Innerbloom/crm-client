import {Component, EventEmitter, Inject, OnInit, Output, Renderer2} from '@angular/core';
import {AuthService} from "../../../../../services/auth.service";
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  theme: Theme = 'light-theme'

  themeTable = new BehaviorSubject('ag-theme-alpine')

  constructor(private authService: AuthService,
              @Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) { }


  ngOnInit(): void {
    this.initializeTheme()
  }


  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ?
        (this.theme = 'dark-theme') : (this.theme = 'light-theme')
    )
    if (this.theme === 'dark-theme') {
      this.themeTable.next('ag-theme-alpine-dark')
    } else {
      this.themeTable.next('ag-theme-alpine')
    }
  }

  initializeTheme = (): void =>
      this.renderer.addClass(this.document.body, this.theme)

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout() {
    this.authService.logout()
  }
}

export type Theme = 'light-theme' | 'dark-theme'
