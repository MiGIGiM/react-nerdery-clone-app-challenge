import { mockedApiInstance, spotifyApiInstance } from './index';
import {
    PlaylistDataRaw,
    PlaylistInfo,
    Track,
    TrackRaw,
    AlbumDataRaw,
    BaseDataRaw,
    Playlist,
    Artist,
    Album,
    Category,
} from '../shared/types/spotify';

let likedSongsIds: string[] | null = null;
const loggedUser = JSON.parse(localStorage.getItem('user')!);

export const fetchLikedTracks = async (userId: number) => {
    const data: Track[] = await mockedApiInstance.get('/tracks', {
        params: {
            userId,
            liked: true,
        },
    });

    return data;
};

export const getFeaturedPlaylists = async () => {
    const data: {
        message: string;
        playlists: { items: PlaylistDataRaw[] };
    } = await spotifyApiInstance().get('/browse/featured-playlists', {
        params: {
            limit: 7,
        },
    });

    return {
        message: data.message,
        playlists: data.playlists.items.map((playlist) => {
            const [image] = playlist.images;

            return {
                description: playlist.description,
                id: playlist.id,
                image: image.url,
                name: playlist.name,
            };
        }),
    };
};

export const getCategoryPlaylists = async (categoryId: string) => {
    const data: {
        playlists: { items: PlaylistDataRaw[] };
    } = await spotifyApiInstance().get(
        `browse/categories/${categoryId}/playlists`,
        {
            params: {
                limit: 7,
            },
        },
    );

    return {
        playlists: data.playlists.items.map((playlist) => {
            const [image] = playlist.images;

            return {
                description: playlist.description,
                id: playlist.id,
                image: image.url,
                name: playlist.name,
            };
        }),
    };
};

export const createPlaylist = async (
    userId: number,
): Promise<{
    id: number;
    name: string;
    description: string;
    userId: number;
}> => {
    return mockedApiInstance.post('/playlists', {
        userId,
        name: 'New Playlist',
        description: '',
    });
};

export const getUserPlaylists = async (userId: number) => {
    const data: PlaylistInfo[] = await mockedApiInstance.get('/playlists', {
        params: {
            userId,
        },
    });

    return data;
};

export const getUserPlaylistById = async (id: number) => {
    const data: PlaylistInfo[] = await mockedApiInstance.get('/playlists', {
        params: {
            id,
        },
    });

    const [playlist] = data;

    return playlist;
};

export const addTrackToPlaylist = async (playlistId: number, track: Track) => {
    const num = Math.floor(1000 + Math.random() * 9000);
    return mockedApiInstance.post('/tracks', {
        playlistId,
        ...track,
        id: track.id + num,
    });
};

export const getPlaylistTracks = async (playlistId: number) => {
    const data: Track[] = await mockedApiInstance.get('/tracks', {
        params: {
            playlistId,
        },
    });

    if (data.length === 0) {
        throw new Error('No tracks found');
    }

    return data;
};

export const removeTrackFromPlaylist = async (id: string) => {
    return mockedApiInstance.delete(`/tracks/${id}`);
};

export const deletePlaylistById = async (id: number) => {
    return mockedApiInstance.delete(`/playlists/${id}`);
};

export const editPlaylistInfo = async (form: PlaylistInfo) => {
    return mockedApiInstance.put(`/playlists/${form.id}`, {
        ...form,
    });
};

if (!likedSongsIds && loggedUser) {
    likedSongsIds = await fetchLikedTracks(loggedUser.id).then((tracks) =>
        tracks.map((track) => {
            const { id } = track;

            return id.substring(0, id.length - 4);
        }),
    );
}

export const fetchTracks = async (
    q: string,
    offset: number,
): Promise<Track[]> => {
    const data: {
        tracks: {
            items: TrackRaw[];
        };
    } = await spotifyApiInstance().get('/search', {
        params: {
            q,
            offset,
            type: 'track',
        },
    });

    return data.tracks.items.map((track) => {
        const [image] = track.album.images;
        const [artist] = track.album.artists;

        return {
            id: track.id,
            name: track.name,
            artist: artist.name,
            album: {
                name: track.album.name,
                image: image.url,
            },
            duration_ms: track.duration_ms,
            liked: likedSongsIds?.includes(track.id),
        };
    });
};

export const fetchAlbums = async (
    q: string,
    offset: number,
): Promise<Album[]> => {
    const data: {
        albums: {
            items: AlbumDataRaw[];
        };
    } = await spotifyApiInstance().get('/search', {
        params: {
            q,
            offset,
            type: 'album',
        },
    });

    return data.albums.items.map((album) => {
        const [image] = album.images;
        const [artist] = album.artists;
        const { release_date } = album;

        const releaseYear = release_date.substring(
            0,
            release_date.indexOf('-'),
        );

        return {
            id: album.id,
            name: album.name,
            description: `${releaseYear} - ${artist.name}`,
            image: image.url,
        };
    });
};

export const fetchPlaylists = async (
    q: string,
    offset: number,
): Promise<Playlist[]> => {
    const data: {
        playlists: {
            items: PlaylistDataRaw[];
        };
    } = await spotifyApiInstance().get('/search', {
        params: {
            q,
            offset,
            type: 'playlist',
        },
    });

    return data.playlists.items.map((playlist) => {
        const [image] = playlist.images;

        return {
            description: playlist.description,
            id: playlist.id,
            image: image.url,
            name: playlist.name,
        };
    });
};

export const fetchArtists = async (
    q: string,
    offset: number,
): Promise<Artist[]> => {
    const data: {
        artists: {
            items: BaseDataRaw[];
        };
    } = await spotifyApiInstance().get('/search', {
        params: {
            q,
            offset,
            type: 'artist',
        },
    });

    return data.artists.items.map((artist) => {
        const [image] = artist.images;

        return {
            id: artist.id,
            name: artist.name,
            image: image.url,
            description: 'Artist',
        };
    });
};

export const updateTrackInfo = async (track: Track) => {
    return mockedApiInstance.put(`/tracks/${track.id}`, {
        ...track,
    });
};

export const createTrackInfo = async (track: Track) => {
    return mockedApiInstance.post('/tracks', {
        ...track,
    });
};

export const fetchCategories = async (): Promise<Category[]> => {
    const data: {
        categories: {
            items: {
                id: string;
                name: string;
                icons: { url: string }[];
            }[];
        };
    } = await spotifyApiInstance().get('/browse/categories', {
        params: {
            limit: 49,
        },
    });

    return data.categories.items.map((category) => {
        const [image] = category.icons;

        return {
            id: category.id,
            name: category.name,
            image: image.url,
        };
    });
};
