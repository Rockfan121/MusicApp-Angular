import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DialogData {
  title: string;
  artist: string;
  tags: string;
  lyrics: string;
  translatedLyrics: string;
  file: any;
}

@Component({
  selector: 'tab-modal',
  templateUrl: './tab-modal.component.html',
  styleUrls: ['./tab-modal.component.scss']
})
export class TabModalComponent {

    
  constructor(
    public dialogRef: MatDialogRef<TabModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onCancelClick(): void {
      this.dialogRef.close();
    }
  
}
