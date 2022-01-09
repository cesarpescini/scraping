export class Song{
    constructor(title, fileSize, sequencedBy, comments){
        this.setSongName(title);
        this.setFileSize(fileSize)
        this.setSequencedBy(sequencedBy);
        this.setComments(comments);
    }

    setSongName(unnormalizedSongName){
        var normalizedSongName = unnormalizedSongName.replace("<td>","");
        normalizedSongName = normalizedSongName.substring(normalizedSongName.indexOf(">") + 1);
        normalizedSongName = normalizedSongName.replace("</a>","");
        this.title = normalizedSongName.trim() == "" ? null : normalizedSongName;;
    }

    setFileSize(unnormalizedFileSize){
        this.fileSize = +unnormalizedFileSize.replace(/\D/g, "");
    }

    setSequencedBy(unnormalizedSequencedBy){
        var normalizedSequencedBy = unnormalizedSequencedBy.substring(unnormalizedSequencedBy.indexOf(">") + 1);
        normalizedSequencedBy = normalizedSequencedBy.replace("</td>","");
        this.sequencedBy = normalizedSequencedBy.trim() == "" ? null : normalizedSequencedBy;
    }

    setComments(unnormalizedComments){
        var normalizedComments = unnormalizedComments.substring(unnormalizedComments.indexOf("thread\">") + 1);
        normalizedComments = +normalizedComments.replace(/\D/g, "");
        this.comments = normalizedComments;
    }
}