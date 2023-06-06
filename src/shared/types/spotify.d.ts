export interface Response {
    description: string;
    id: string;
    name: string;
    image: string;
}

export interface Playlist extends Response {}

export interface Album extends Response {}

export interface Artist extends Response {}

export interface BaseDataRaw {
    id: string;
    name: string;
    images: {
        height: number | null;
        url: string;
        width: number | null;
    }[];
}

export interface PlaylistDataRaw extends BaseDataRaw {
    description: string;
}

export interface AlbumDataRaw extends BaseDataRaw {
    release_date: string;
    artists: {
        name: string;
    }[];
}

export interface PlaylistInfo {
    id: number;
    userId: number;
    name: string;
    description: string;
}

export interface Track {
    id: string;
    name: string;
    artist: string;
    album: { name: string; image: string };
    duration_ms: number;
    liked?: boolean;
    playlistId?: number;
}

export type Filters = 'album' | 'track' | 'artist' | 'playlist';

export type SearchParams = {
    q: string;
    type: Filters[];
    offset: number;
};

export interface TrackRaw {
    id: string;
    name: string;
    album: {
        name: string;
        images: {
            url: string;
        }[];
        artists: {
            name: string;
        }[];
    };
    duration_ms: number;
}

export interface Category {
    id: string;
    name: string;
    image: string;
}
