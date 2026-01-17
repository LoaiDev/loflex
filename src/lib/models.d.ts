export interface VideoData {
	watch: WatchData;
	download: DownloadData;
}

export type SingleSourceData = {
	type: 'single' | 'hls';
	url: string;
};

export interface DirectFileData {
	type: 'direct';
	sources: DirectSource[];
}
export interface DirectSource {
	quality: string;
	url: string;
	height: number;
}

export type WatchData = DirectFileData | SingleSourceData;

export type DownloadData = DirectFileData | SingleSourceData;

interface BaseItem {
	id: string;
	name: string;
	poster?: string;
}

export interface Movie extends BaseItem {
	video: VideoData;
}
export interface Series extends BaseItem {
	no_of_episodes?: number;
}

interface MovieSearchItem {
	type: 'movie';
	item: Omit<Movie, 'video'>;
}

interface SeriesSearchItem {
	type: 'series';
	item: Series;
}

export type SearchItem = MovieSearchItem | SeriesSearchItem;
