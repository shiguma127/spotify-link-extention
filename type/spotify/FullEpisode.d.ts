import { Show } from "./Show"
import { ExternalUrls, ImagesEntity } from "./spotify"

export type FullEpisode = {
  kind:"fullepisode"
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: ImagesEntity[] | null;
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages?: string[] | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point?: null;
  show: Show;
}

