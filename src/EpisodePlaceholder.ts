import { PlaceholderDiscriptionType } from "../type/PlaceholderDiscriptionType";

const array: PlaceholderDiscriptionType[] = [
  {
    placeholder: "%name%",
    required: false,
    discription: "Podcast Title",
  },
  {
    placeholder: "%url%",
    required: true,
    discription: "URL to listen to the podcast on Spotify",
  },
];
export default array;
