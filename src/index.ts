import askUser from "./askUser.js";

const songIndex = askUser("Escoja el numero de cancion: ");

const songPlaylist = [
  "Con La Brisa, by Ludwig",
  "Si No Estás, by Iñigo quintero",
  "Disfruto, by Carla Morrison",
  "Jericho, by Iniko",
  "Past Lives, by sapientdream",
  "HIGHER, by Bishop Briggs",
];

let selectedSong;

if (Number(songIndex) - 1 >= 0) {
  selectedSong = songPlaylist[Number(songIndex) - 1];
} else {
  selectedSong = songPlaylist[0];
}

if (Number(songIndex) <= songPlaylist.length) {
  console.log(selectedSong);
} else {
  console.log("Error: no hay ninguna cancion en esa posicion");
}
