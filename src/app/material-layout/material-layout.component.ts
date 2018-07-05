import { Component } from '@angular/core';

import { ARTISTS } from 'assets/mock-data/artists';
import { PLAYLISTS } from 'assets/mock-data/playlists';
import { SubmenuComponent } from './submenu/submenu-component';
import { RepositoryComponent } from './repository/repository.component';

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

  constructor(){}
  
}
