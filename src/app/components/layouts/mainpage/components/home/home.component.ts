import {Component, OnInit} from '@angular/core';
import {Partners} from "../../../../../services/interfaces";
import {DataService} from "../../../../../services/data.service";
import {Subscription} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogPartnersComponent} from "./dialog-partners/dialog-partners.component";
import {BtnCellRendererComponent} from "./ag-greed-partners/btn-cell-renderer/btn-cell-renderer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sideNavStatus: boolean = false;

  public subscription: Subscription = new Subscription();
  public partners: Partners[] = [];
  public row: any;
  public id: any;


  constructor(private dataService: DataService, private dialog: MatDialog,) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(DialogPartnersComponent, dialogConfig).afterClosed().subscribe(val => {
      if(val === 'save') {
        this.ngOnInit()
      }
    })
  }

  columnDef = [
    { headerName: 'Partner Name', field: 'username', flex: 0 },
    { headerName: 'Date', field: 'date', flex: 1 },
    { headerName: 'Status', field: 'partnersEvent', flex: 0 },
    { headerName: 'Email', field: 'email', flex: 1 },
    { headerName: 'Edit', field: 'action', flex: 0.3,
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
      edit: (row: any) => {
        this.dialog.open(DialogPartnersComponent, {
          width: '30%',
          disableClose: true,
          data: row
        }).afterClosed().subscribe(val =>  {
          if(val === 'update') {
            this.ngOnInit()
          }
        })
      }
      },
    },
  ];

  ngOnInit(): void {
    const partner = this.dataService.getPartners().subscribe(partners => {
      this.partners = partners
    })

    this.subscription.add(partner)
  }
}
