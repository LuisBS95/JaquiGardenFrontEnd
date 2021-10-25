import { Component,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Tarjeta2Component } from './tarjeta2.component';
interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
  
})
export class Modal2Component{

  constructor(public dialogRef: MatDialogRef<Tarjeta2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


onNoClick(): void {
this.dialogRef.close();
}
}
