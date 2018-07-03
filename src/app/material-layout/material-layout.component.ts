import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

import { ARTISTS } from 'assets/mock-data/artists';
import { PLAYLISTS } from 'assets/mock-data/playlists';
import { SubmenuComponent } from './submenu/submenu-component';
import { TabModalComponent } from '../tab-modal/tab-modal.component';

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
    
  constructor(public dialog: MatDialog) {}

  onOpen(): void {
    const dialogRef = this.dialog.open(TabModalComponent, {
      width: '600px',
      data: {title: "",
            artist: "",
            tags: "",  
            lyrics: "",
            translatedLyrics: "",
            file: ""
          }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //dodac wyskakiwanie snackbara
    });
  }
  
  }
