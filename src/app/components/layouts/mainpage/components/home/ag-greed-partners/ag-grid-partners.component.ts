import {Component, Input, OnInit} from '@angular/core';
import {Partners} from "../../../../../../services/interfaces";

@Component({
  selector: 'app-ag-greed-partners',
  templateUrl: './ag-grid-partners.component.html',
  styleUrls: ['./ag-grid-partners.component.scss']
})
export class AgGridPartnersComponent implements OnInit {

  @Input() partners: Partners[] = [];
  @Input() columnDef: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
