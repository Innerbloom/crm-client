import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../../services/auth.service";
import {ThemeService} from "../../../../../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(private authService: AuthService,
              public themeService: ThemeService) { }


  ngOnInit(): void {
   this.themeService.initializeTheme()
  }

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout(): void {
    this.authService.logout().then(res => console.log(res)).catch(err => console.log(err));
  }
}

export type Theme = 'light-theme' | 'dark-theme'
