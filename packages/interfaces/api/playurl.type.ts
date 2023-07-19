export interface IPlayURLResponse {
    audios: Audio[];
    videos: Video[];
}

interface Video {
    url: string;
    id: string;
    duration: string;
    mimeType: string;
    codecs: string;
    size: string;
    quality: number;
    frameRate: string;
    backupUrls: string[];
}

interface Audio {
    url: string;
    id: string;
    duration: string;
    mimeType: string;
    codecs: string;
    size: string;
    backupUrls: string[];
}
