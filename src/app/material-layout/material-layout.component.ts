import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { ARTISTS } from 'assets/mock-data/artists';
import { PLAYLISTS } from 'assets/mock-data/playlists';
import { SubmenuComponent } from './submenu/submenu-component';
import { TabModalComponent } from '../tab-modal/tab-modal.component';
import { Track } from 'app/track';

@Component({
  selector: 'material-layout',
  templateUrl: './material-layout.component.html',
  styleUrls: ['./material-layout.component.scss']
})
export class MaterialLayoutComponent {

  playlists = PLAYLISTS;
  artists = ARTISTS;

  playlistsName = "Playlists";
  playlistsItem = "playlist";
  artistsName = "Artists";
  artistsItem = "artist";

  track: Track = new Track("track1", "artist2", "tag1", "line1", "linijka1", "");
    
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

  onOpen(): void {
    const dialogRef = this.dialog.open(TabModalComponent, {
      width: '600px',
      data: this.track
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.snackBar.open('New track has been added', '', {duration: 2000, panelClass: "snackbar"});
    });
  }
  
}
