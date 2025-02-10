import askUser from "./askUser.js";

const songIndex = askUser("Enter index of song: ");

const songPlaylist = [
  "Con La Brisa, by Ludwig",
  "Si No Estás, by Iñigo quintero",
  "Disfruto, by Carla Morrison",
  "Jericho, by Iniko",
  "Past Lives, by sapientdream",
  "HIGHER, by Bishop Briggs",
];

const selectedSong = songPlaylist[Number(songIndex) - 1];

if (Number(songIndex) <= songPlaylist.length) {
  console.log(selectedSong);
} else {
  console.log("Error: no hay ninguna cancion en esa posicion");
}
