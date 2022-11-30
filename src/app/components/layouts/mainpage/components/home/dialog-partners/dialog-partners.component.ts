import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../../../../services/data.service";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-partners',
  templateUrl: './dialog-partners.component.html',
  styleUrls: ['./dialog-partners.component.scss']
})
export class DialogPartnersComponent implements OnInit {


    partnersForm!: FormGroup;
    actionBtn: string = "Save";
    gridApi: any;
    gridColumnApi: any;

    constructor(private formBuilder: FormBuilder,
                private dataService: DataService,
                private dialogRef: MatDialogRef<DialogPartnersComponent>,
                @Inject(MAT_DIALOG_DATA) public editData: any
    ) { }

  ngOnInit(): void {
    this.partnersForm = this.formBuilder.group({
      username: ['', Validators.required],
      partnersEvent: ['', Validators.required],
      email: ['', Validators.required]
    })

      if(this.editData) {
          this.actionBtn = "Update"
          this.partnersForm.controls['username'].setValue(this.editData.username)
          this.partnersForm.controls['partnersEvent'].setValue(this.editData.partnersEvent)
          this.partnersForm.controls['email'].setValue(this.editData.email)
      }
  }

  addPartner() {
    if(!this.editData) {
        if(this.partnersForm.valid) {
            this.dataService.postPartners(this.partnersForm.value)
                .subscribe({
                    next:() => {
                        this.partnersForm.reset();
                        this.dialogRef.close('save');
                    },
                    error:(err) => {
                        console.log(err)
                    }
                });
        }
    } else {
        this.updatePartner()
    }
  }

  updatePartner () {
        this.dataService.putPartners(this.partnersForm.value, this.editData.id)
            .subscribe({
                next: () => {
                    this.partnersForm.reset();
                    this.dialogRef.close('update');
                },
                error:(err) => {
                    console.log(err)
                }
            })
  }

}
