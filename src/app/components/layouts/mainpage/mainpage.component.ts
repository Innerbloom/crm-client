import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mainpage.dashboard',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  sideNavStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
