import { Episode } from "../type/spotify/Episode";
import { FullEpisode } from "../type/spotify/FullEpisode";
import {FullTrack} from "../type/spotify/FullTrack";
import {Track} from "../type/spotify/Track";

export function toTrack(fullTrack: FullTrack): Track {
    return {
        artists: fullTrack.artists.map(artist=>artist.name),
        name: fullTrack.name,
        url: fullTrack.external_urls.spotify,
        album_name: fullTrack.album.name
    }
}

export function toEpisode(fullEpisode: FullEpisode): Episode {
    return {
        name: fullEpisode.show.name,
        url: fullEpisode.external_urls.spotify
    }
}
