import api from "./api/$api";
import aspida, { FetchConfig } from "@aspida/fetch";
import { replacePlaceholder, toTrack, toEpisode, getPlaceholder } from "./util";
import { Items, ItemType } from "../type/spotify/ItemType";

const observer = new MutationObserver(() => {
  const lodingContainer: HTMLElement = document.querySelector(
    ".js-app-loading"
  ) as HTMLElement;
  const isLoading = lodingContainer.style.display !== "none";
  if (isLoading) return;
  observer.disconnect();
  const drawer = document.querySelector(".js-drawer");
  const addImageButton = drawer.querySelector(".js-add-image-button");
  const addSpotifyLinkButton = document.createElement("button");
  addSpotifyLinkButton.className =
    "btn btn-on-blue full-width txt-left margin-b--12 padding-v--6 padding-h--12";
  addSpotifyLinkButton.id = "add-spotify-link-button";
  addSpotifyLinkButton.dataset.originalTitle = "tabindex";
  const icon = document.createElement("img");
  icon.className = "Icon txt-size--21";
  icon.src = chrome.runtime.getURL("/resources/Spotify_Icon_RGB_Green.png");
  icon.style.position = "absolute";
  icon.style.alignSelf = "center";
  const span = document.createElement("span");
  span.className = "label padding-ls";
  span.innerText = "Add Spotify Link";
  span.style.marginLeft = "23px";
  addSpotifyLinkButton.appendChild(icon);
  addSpotifyLinkButton.appendChild(span);
  addSpotifyLinkButton.addEventListener("click", addSpotifyLink);
  addImageButton.after(addSpotifyLinkButton);
});

async function addSpotifyLink() {
  const fetchConfig: FetchConfig = {
    baseURL: "http://localhost:3333",
    credentials: "include",
    mode: "cors",
  };
  const client = api(aspida(fetch, fetchConfig));
  const response = await client.$get().catch(console.error);
  if (!response) return;
  response.kind = `full${
    response.hasOwnProperty("show") ? "episode" : "track"
  }`;
  switch (response.kind) {
    case "fulltrack": {
      const placeholder = await getPlaceholder(Items.Track);
      const text = replacePlaceholder(toTrack(response), placeholder);
      console.log(placeholder);
      appendTweet(text);
      break;
    }
    case "fullepisode": {
      const placeholder = await getPlaceholder(Items.Episode);
      const text = replacePlaceholder(toEpisode(response), placeholder);
      appendTweet(text);
      break;
    }
  }
}

function appendTweet(text: string) {
  const tweetArea = document.querySelector(
    ".js-compose-text.compose-text"
  ) as HTMLTextAreaElement;
  const event = new Event("change");
  tweetArea.value += text;
  tweetArea.dispatchEvent(event);
}

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});
