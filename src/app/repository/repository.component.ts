import {Component, OnInit} from '@angular/core';
import { Track } from 'app/track';
import { TRACKS } from 'assets/mock-data/tracks';

import {MatTableDataSource} from '@angular/material';
import {SelectionModel } from '@angular/cdk/collections';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'repository',
  styleUrls: ['repository.component.scss'],
  templateUrl: 'repository.component.html',
})
export class RepositoryComponent implements OnInit {
  displayedColumns: string[] = ['select', 'image', 'title', 'artist', 'duration'];
  dataSource = new MatTableDataSource<Track>(TRACKS);

  initialSelection = [];
  selection = new SelectionModel<Track>(true, this.initialSelection);

  constructor() {}

  public ngOnInit() {
  }
  applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

  onCreateClick(){
    console.log("selection");
    console.log(this.selection);
  }

  onDeleteClick() {
    var selectedRows = this.selection.selected;
    var allRows = this.dataSource.data;
    var toBeRemoved = [];
    for (var i = 0; i < selectedRows.length; i++){
      for (var j = 0; j < allRows.length; j++){
        if ((selectedRows[i].title === allRows[j].title) && (selectedRows[i].artist === allRows[j].artist)){
          toBeRemoved.push(j);
          break;
        }
      }
    }

    console.log(toBeRemoved);
    for (var i = toBeRemoved.length-1; i >=0; i--){
      TRACKS.splice(toBeRemoved[i],1);
    }
      this.dataSource = new MatTableDataSource<Track>(TRACKS);

  this.initialSelection = [];
  this.selection = new SelectionModel<Track>(true, this.initialSelection);
  }
}