import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {List} from "../../../../../services/interfaces";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Input() sideNavStatus: boolean = false;
  @Output() public clickOutside = new EventEmitter<MouseEvent>();


     public list: List[] = [
    {
      number: 1,
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: '/mainpage/home',
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

     @HostListener('document: click', ['$event', '$event.target'])
     public onClick(event: MouseEvent, targetElement: HTMLElement) : void {
       if(!targetElement) {
         return;
       }
       const clickedInside = this.elementRef.nativeElement.contains(targetElement);
       if(!clickedInside) {
         this.clickOutside.emit(event);
       }
     }


     ngOnInit(): void {

     }
}
