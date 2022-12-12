import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Partners} from "../../../../../services/interfaces";
import {DataService} from "../../../../../services/data.service";
import {Subscription} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogPartnersComponent} from "./dialog-partners/dialog-partners.component";
import {BtnCellRendererComponent} from "./ag-greed-partners/btn-cell-renderer/btn-cell-renderer.component";
import {ToastrService} from "ngx-toastr";
import {values} from "ag-grid-community/dist/lib/utils/generic";
import {Theme} from "../header/header.component";


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

  constructor(private dataService: DataService,
              private toast: ToastrService,
              private dialog: MatDialog,) { }

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
    { headerName: 'Partner Name', field: 'username', width: 250 },
    { headerName: 'Date', field: 'date', width: 250, cellRenderer: (data: any) => {
      return data.value ? (new Date(data.value)).toLocaleDateString('eu-UA',
          { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'}) : '';
      } },
    { headerName: 'Status', field: 'partnersEvent', width: 120 },
    { headerName: 'Email', field: 'email', width: 250, },
    { headerName: 'Actions', field: 'action', width: 180,
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
      },
        delete: (id: number) => {
          this.dataService.deletePartners(id)
              .subscribe({
                next:() => {
                  this.toast.error(`Partner removed.`)
                  this.ngOnInit()
                },
                error:(err) => {
                  console.log(err)
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
