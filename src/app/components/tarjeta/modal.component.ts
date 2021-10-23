import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TarjetaComponent } from './tarjeta.component';
interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<TarjetaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

 
  onNoClick(): void {
    this.dialogRef.close();
  }
}
