import { PlaceholderDiscriptionType } from "../type/PlaceholderDiscriptionType";

const array: PlaceholderDiscriptionType[] = [
  {
    placeholder: "%name%",
    required: false,
    discription: "Song title",
  },
  {
    placeholder: "%artists%",
    required: false,
    discription: "Song Artist",
  },
  {
    placeholder: "%album_name%",
    required: false,
    discription: "Album name",
  },
  {
    placeholder: "%url%",
    required: true,
    discription: "URL to listen to the song on Spotify",
  },
];

export default array;
