import { Song } from "./song.js";

export default getSongsFromPreparedTable;

function getSongsFromPreparedTable(preparedSongTable){
    var arraySongs = preparedSongTable.split("<tr>");
    var normalizedSongs = [];
    for(var i=0;i<arraySongs.length;i++) {
        var song = arraySongs[i];
        var songInfos = song.split("</td>");
        if(songInfos.length > 2){
            var normalizedSong = new Song(songInfos[0], songInfos[1], songInfos[2], songInfos[3]);
            normalizedSongs.push(normalizedSong);
        }
    }

    return normalizedSongs;
}