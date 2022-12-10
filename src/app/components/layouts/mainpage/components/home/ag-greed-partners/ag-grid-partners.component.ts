import {Component, Input, OnInit} from '@angular/core';
import {Partners} from "../../../../../../services/interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {values} from "ag-grid-community/dist/lib/utils/generic";

@Component({
  selector: 'app-ag-greed-partners',
  templateUrl: './ag-grid-partners.component.html',
  styleUrls: ['./ag-grid-partners.component.scss']
})
export class AgGridPartnersComponent implements OnInit {

  @Input() partners: Partners[] = [];
  @Input() columnDef: any[] = []
  @Input() themeTable!: string;

  gridApi: any;
  gridColumnApi: any;

  constructor() { }

  OnGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    }
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.themeTable))
  }

}