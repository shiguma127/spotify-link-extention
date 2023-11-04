import api from "../api/$api";
import aspida, { FetchConfig } from "@aspida/fetch";
import {
  replacePlaceholder,
  toTrack,
  toEpisode,
  getPlaceholder,
} from "../util";
import { Items } from "../../type/spotify/ItemType";

const API_URL = "https://spotify-extension-api.shiguma.net/";

const observer = new MutationObserver(() => {
  // geoButton がなかったら悲しい
  const geoButton = document.querySelector("div[data-testid='geoButton]");
  if (!geoButton) return;
  console.log("element found!");
  observer.disconnect();
  const addiopnalContentsButtonList = geoButton.parentElement.parentElement;
  generateButton(addiopnalContentsButtonList);
});

const generateButton = (addiopnalContentsButtonList: HTMLElement) => {
  //アイコンを作成
  const icon = document.createElement("img");
  icon.className = "Icon txt-size--21";
  icon.src = chrome.runtime.getURL("/resources/Spotify_Icon_RGB_Green.png");
  icon.style.position = "absolute";
  icon.style.alignSelf = "center";

  const buttonContainer = document.createElement("div"); // TODO rename
  buttonContainer.appendChild(icon);

  addiopnalContentsButtonList.appendChild(buttonContainer);
};
