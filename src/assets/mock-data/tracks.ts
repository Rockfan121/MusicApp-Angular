import { Track } from 'app/track';
import { UploadFile } from 'ngx-file-drop';


const fileEntry = {
  name: "track_name",
  isDirectory: false,
  isFile: true
};

const file: UploadFile = new UploadFile("relative_path", fileEntry);

const imgPath = "https://images.freeimages.com/images/large-previews/b31/butterfly-1392408.jpg";
export const TRACKS: Track[] = [
  new Track("track1", "artist2", imgPath, "tag1", "line1", "linijka1", [file]),
  new Track("track2", "TFK", imgPath, "rap, rock", "line", "linijka", [file]),
  new Track("track3", "RED", imgPath, "metal, rock", "line1", "linijka1", [file]),
  new Track("track11110", "Armia", imgPath, "rock", "line1", "linijka1", [file]),
  new Track("track67", "Starset", imgPath, "sci-fi", "line1", "linijka1", [file]),
  new Track("track12", "Skillet", imgPath, "rock", "line1", "linijka1", [file]),
];