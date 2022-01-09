import { getHtmlFromUrl, startScraping } from "./scraping-service.js";

getHtmlFromUrl("http://www.vgmusic.com/music/console/nintendo/snes/").then((response) => {
   response.text().then((htmlText) => {
       startScraping('Chrono Trigger', htmlText);
   })
});