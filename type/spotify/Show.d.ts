import { ExternalUrls, ImagesEntity } from "./spotify";

export type Show = {
  available_markets?: string[] | null;
  copyrights?: null[] | null;
  description: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: ImagesEntity[] | null;
  is_externally_hosted: boolean;
  languages?: string[] | null;
  media_type: string;
  name: string;
  publisher: string;
};
