import {writeFile} from 'fs';

export default prepareSongTable;

function prepareSongTable(gameName, songTable){
    var songTableArray = songTable.split('\n');

    var gamePosition = getPositionInSongTable(gameName, songTableArray)
    removeLinesBeforeGame(songTableArray, gamePosition);

    var nextGamePosition = getNextGamePositionInSongTable(gameName, songTableArray);

    removeLinesAfterGame(songTableArray, nextGamePosition);

    return songTableArray.join("");
}

function removeLinesBeforeGame(songTableArray, gamePosition){
    songTableArray.splice(0, gamePosition-1);
}

function removeLinesAfterGame(songTableArray, nextGamePosition){
    songTableArray.splice(nextGamePosition, songTableArray.length-nextGamePosition);
}

function getPositionInSongTable (gameName, songTableArray) {
    for (var j=0; j<songTableArray.length; j++) {
        if (songTableArray[j].match(gameName)) return j;
    }
    return -1;
}

function getNextGamePositionInSongTable(gameName, songTableArray){
    var headerCount = 0;

    for (var j=1; j<songTableArray.length; j++) {
        if (songTableArray[j].match("header") && !songTableArray[j].match(gameName)) {
            return j;
        }
    }
    return -1;
}