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
  addSpotifyLinkButton.dataset.originalTitle = "tabindex";
  const icon = document.createElement("img");
  icon.className = "Icon icon-camera txt-size--18";
  //todo: add icon
  //icon.src = chrome.runtime.getURL("icons/spotify.svg");
  const span = document.createElement("span");
  span.className = "label padding-ls";
  span.innerText = "Add Spotify Link";
  addSpotifyLinkButton.appendChild(icon);
  addSpotifyLinkButton.appendChild(span);
  addImageButton.after(addSpotifyLinkButton);
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});
