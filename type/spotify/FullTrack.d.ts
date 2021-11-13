import { Album } from "./Album"
import { ArtistsEntity } from "./ArtistsEntity"
import { ExternalIds, ExternalUrls, ImagesEntity } from "./spotify"

export type FullTrack = {
  kind : "fulltrack"
  album: Album;
  artists?: ArtistsEntity[] | null;
  available_markets?: string[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
}