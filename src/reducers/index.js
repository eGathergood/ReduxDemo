import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tainted Love", duration: "3:00" },
    { title: "All-Star", duration: "3:20" },
    { title: "Nuvole bianche", duration: "5:60" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
