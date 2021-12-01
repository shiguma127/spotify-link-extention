import React from "react";
import ReactDOM from "react-dom";
import { Box, Button, CssBaseline, Grid, TextField } from "@mui/material";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import AppHeader from "./components/AppHeader";
import { PlaceholderDiscriptionType } from "../type/PlaceholderDiscriptionType";
import PlaceholderForm from "./components/PlaceholderForm";
import TrackPlaceholder from "./TrackPlaceholder";
import EpisodePlaceholder from "./EpisodePlaceholder";
import {Items} from "../type/spotify/ItemType";
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f2f5f9",
    },
  },
};
const theme = createTheme(themeOptions);
const rows: Array<PlaceholderDiscriptionType> = [
  {
    placeholder: "Hello World",
    required: false,
    discription: "This is a placeholder discription",
  },
  {
    placeholder: "Hello World2",
    required: true,
    discription: "This is a placeholder discription",
  },
];
const App = () => {
  const [TrackPlaceholderString, setTrackPlaceholderString] =
    React.useState("");
  const [EpisodePlaceHolderString, setEpisodePlaceHolderString] =
    React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <PlaceholderForm
        placeholderDiscription={TrackPlaceholder}
        ItemType={Items.Track}
        onChange={(value: React.SetStateAction<string>) =>
          setTrackPlaceholderString(value)
        }
      />
      <PlaceholderForm
        placeholderDiscription={EpisodePlaceholder}
        ItemType={Items.Episode}
        onChange={(value: React.SetStateAction<string>) =>
          setEpisodePlaceHolderString(value)
        }
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <Button
          variant="contained"
          onClick={() =>
            console.log(TrackPlaceholderString + EpisodePlaceHolderString)
          }
        >
          Save
        </Button>
      </Box>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
