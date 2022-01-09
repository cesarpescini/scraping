import fetch from 'got-fetch';
import {writeFile} from 'fs';
import * as cheerio from 'cheerio'; 
import prepareSongTable from './song-table-service.js';
import { stringify } from 'querystring';
import getSongsFromPreparedTable from './song-service.js';

export async function getHtmlFromUrl(url){
    const resp = await fetch(url);
    return resp;
}

export function startScraping(gameName, htmlText){
    const $ = cheerio.load(htmlText);
    var musicTable = $('tbody').html().toString();
    var preparedSongTable = prepareSongTable(gameName, musicTable);
    
    var songs = getSongsFromPreparedTable(preparedSongTable);

    writeFile('songs.json',JSON.stringify(songs),'utf-8', () => {});
}
