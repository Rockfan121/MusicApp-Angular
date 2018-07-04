import {Component, Inject, DoCheck, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Track } from 'app/track';
import { ARTISTS } from 'assets/mock-data/artists';

@Component({
  selector: 'tab-modal',
  templateUrl: './tab-modal.component.html',
  styleUrls: ['./tab-modal.component.scss']
})
export class TabModalComponent implements DoCheck, OnInit{

  myControl = new FormControl();
  isDisabled: boolean = true;
  artists = ARTISTS;
  filteredArtists: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<TabModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Track) {
  }

    ngOnInit() {
this.filteredArtists = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.artists.filter(option => option.toLowerCase().includes(filterValue));
  }

    onCancelClick(): void {
      this.dialogRef.close(false);
    }
    onOkClick(): void {
      this.dialogRef.close(true);
    }

    ngDoCheck() {
      console.log(this.filteredArtists);
      this.isDisabled = (this.data.title === "" || this.data.file === "");
    }

}
