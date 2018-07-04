import {Component, Inject, DoCheck, OnInit, AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';
import { ImgModalComponent } from '../img-modal/img-modal.component';

import { Track } from 'app/track';
import { ARTISTS } from 'assets/mock-data/artists';

@Component({
  selector: 'tab-modal',
  templateUrl: './tab-modal.component.html',
  styleUrls: ['./tab-modal.component.scss']
})
export class TabModalComponent implements DoCheck, OnInit, AfterViewInit{

  myControl = new FormControl();
  isDisabled: boolean = true;
  artists = ARTISTS;
  filteredArtists: Observable<string[]>;

  className: string = "fileDrop";
  content: string;
  imgPath: string;
  constructor(
    public dialogRef: MatDialogRef<TabModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Track,
    public dialog: MatDialog) {}

    ngOnInit() {
      this.filteredArtists = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.content = (this.data.file.length === 0) 
      ? "Drag some track file here!"
      : "You've successfully uploaded a file!";     
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

    onImgClick(): void {
      console.log(this.data.image);
      const dialogRef = this.dialog.open(ImgModalComponent, {
      data: {path: this.data.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.data.image = result;
        this.imgPath = (this.data.image === "") 
        ? "https://material.angular.io/assets/img/examples/shiba1.jpg"
        : this.data.image;
        console.log(this.data.image);

        document.getElementById("trackImg").style.backgroundImage = ("url(\'" + this.imgPath + "\')");        

      }
    });
    }

    ngDoCheck() {
      this.isDisabled = (this.data.title === "" || this.data.file.length === 0); 
    }

    ngAfterViewInit(){
      this.imgPath = (this.data.image === "") 
        ? "https://material.angular.io/assets/img/examples/shiba1.jpg"
        : this.data.image;

      document.getElementById("trackImg").style.backgroundImage = ("url(\'" + this.imgPath + "\')");  
    }
 
  public dropped(event: UploadEvent) {
    this.data.file = event.files;
    for (const droppedFile of event.files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
        });
        this.className="fileDrop.dropped";
        this.content = "You've successfully uploaded a file!";
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
    this.className="fileDrop.over";
  }
 
  public fileLeave(event){
    console.log(event);
    this.className="fileDrop";
  }

}
