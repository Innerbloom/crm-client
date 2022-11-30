import {Component, Input, OnInit} from '@angular/core';
import {Logs} from "../../../../../../services/interfaces";

@Component({
  selector: 'app-aggreed',
  templateUrl: './aggreed.component.html',
  styleUrls: ['./aggreed.component.scss']
})
export class AggreedComponent implements OnInit {

  constructor() { }

  @Input() logs: Logs[] = [];
  @Input() columnDefs: any[] = [];

  gridApi: any;
  gridColumnApi: any;


  BindData(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.logs);
  }
  onBtnExportDataAsCsv() {
    let params = this.logs;
    this.gridApi.exportDataAsCsv(params);
  }

  ngOnInit(): void {
  }

}
