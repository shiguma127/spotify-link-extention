import React from "react";
import ReactDOM from "react-dom";
import { Alert, Box, Button, CssBaseline, Snackbar } from "@mui/material";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import AppHeader from "./components/AppHeader";
import PlaceholderForm from "./components/PlaceholderForm";
import TrackPlaceholder from "./TrackPlaceholder";
import EpisodePlaceholder from "./EpisodePlaceholder";
import { Items } from "../type/spotify/ItemType";
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
const App = () => {
  const [TrackPlaceholderString, setTrackPlaceholderString] =
    React.useState("");
  const [EpisodePlaceHolderString, setEpisodePlaceHolderString] =
    React.useState("");
  const [open, setOpen] = React.useState(false);
  const closeHandler = () => {
    setOpen(false);
  };
  const save = () => {
    chrome.storage.sync.set(
      {
        placeholder: {
          Track: TrackPlaceholderString,
          Episode: EpisodePlaceHolderString,
        },
      },
      function () {
        setOpen(true);
      }
    );
  };
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
        <Button variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={closeHandler}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert variant="filled" onClose={closeHandler} severity="success" sx={{ width: "100%" }}>
          Saved!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
