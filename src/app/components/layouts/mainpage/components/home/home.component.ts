import {Component, Input, OnInit} from '@angular/core';
import {Logs} from "../../../../../services/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sideNavStatus: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
