export interface Video {
    name: string,
    sources: VideoSource[]
}

export interface VideoSource {
    quality: number,
    download_link: string,
    size?: number
}

export interface Movie {
    id: string,
    name: string,
    video?: Video
}

export interface Series {
    id: string,
    name: string
}

interface MovieSearchItem {
    type: "movie",
    item: Movie
}

interface SeriesSearchItem {
    type: "series",
    item: Series
}

export type SearchItem = MovieSearchItem | SeriesSearchItem
