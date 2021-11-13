import { ArtistsEntity } from "./ArtistsEntity";
import { ExternalUrls, ImagesEntity } from "./spotify";

export type Album = {
  album_type: string;
  artists?: ArtistsEntity[] | null;
  available_markets?: string[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: ImagesEntity[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
};
