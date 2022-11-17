import {Component, Input, OnInit} from '@angular/core';
import {List} from "../../../../../services/interfaces";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input()
  sideNavStatus: boolean = false;

     public list: List[] = [
    {
      number: 1,
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: '/mainpage/home'
    },
    {
      number: 2,
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: 3,
      name: 'Logs',
      icon: 'fa-solid fa-chart-simple',
      routerLink: '/mainpage/logs',
    },
    {
      number: 4,
      name: 'About',
      icon: 'fa-solid fa-circle-info'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
