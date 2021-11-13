import { ExternalUrls } from "./spotify";

export type ArtistsEntity = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
};
