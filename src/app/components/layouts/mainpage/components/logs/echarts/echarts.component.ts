import {Component, Input, OnInit} from '@angular/core';
import {Logs} from "../../../../../../services/interfaces";

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
  sideNavStatus: boolean = false;

  @Input()
  initBasicEcharts: Function = (data: Logs[]) => {};

  constructor() {
  }


  ngOnInit(): void {
  }
}
