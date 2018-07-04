import {Component, Inject, DoCheck} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Track } from 'app/track';

@Component({
  selector: 'tab-modal',
  templateUrl: './tab-modal.component.html',
  styleUrls: ['./tab-modal.component.scss']
})
export class TabModalComponent implements DoCheck{

  isDisabled: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<TabModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Track) {
  }

    onCancelClick(): void {
      this.dialogRef.close(false);
    }
    onOkClick(): void {
      this.dialogRef.close(true);
    }

    ngDoCheck() {
      this.isDisabled = (this.data.title === "" || this.data.file === "");
    }

}
