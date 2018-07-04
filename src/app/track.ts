import { UploadFile } from 'ngx-file-drop';

export class Track{
  constructor (
	public title: string,
	public artist: string,
	public tags: string,
	public lyrics: string,
	public translatedLyrics: string,
  	public file: UploadFile[]) {}
}