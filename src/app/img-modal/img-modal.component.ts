import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.scss']
})

export class ImgModalComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<ImgModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

    ngOnInit() {
      console.log("img-modal: " + this.data.path);
  }

    onClose(): void {
      this.dialogRef.close();
    }
    onOkClick(): void {
      this.dialogRef.close(this.data.path); 
    }

}
