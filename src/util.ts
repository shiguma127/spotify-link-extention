import { Episode } from "../type/spotify/Episode";
import { FullEpisode } from "../type/spotify/FullEpisode";
import { FullTrack } from "../type/spotify/FullTrack";
import { ItemType } from "../type/spotify/ItemType";
import { Track } from "../type/spotify/Track";

export function toTrack(fullTrack: FullTrack): Track {
  return {
    artists: fullTrack.artists.map((artist) => artist.name).join(", "),
    name: fullTrack.name,
    url: fullTrack.external_urls.spotify,
    album_name: fullTrack.album.name,
  };
}

export function toEpisode(fullEpisode: FullEpisode): Episode {
  return {
    name: fullEpisode.show.name,
    url: fullEpisode.external_urls.spotify,
  };
}

export function getPlaceholder(itemType: ItemType): Promise<string> {
  return new Promise((resolve) => {
    chrome.storage.sync.get("placeholder", (value) => {
      const result = value.placeholder[itemType.type] as string;
      resolve(result);
    });
  });
}

export function replacePlaceholder(
  replacements: Track | Episode,
  text: string
): string {
  const str: string = text.replace(/%\w+%/g, function (all) {
    const key = all.replace(/^%|%$/g, "");
    return replacements[key] || key;
  });
  return str;
}
