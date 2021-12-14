import React from "react";
import ReactDOM from "react-dom";
import {
  Alert,
  AlertColor,
  Box,
  Button,
  CssBaseline,
  Snackbar,
} from "@mui/material";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import AppHeader from "./components/AppHeader";
import PlaceholderForm from "./components/PlaceholderForm";
import TrackPlaceholder from "./TrackPlaceholder";
import EpisodePlaceholder from "./EpisodePlaceholder";
import { Items } from "../type/spotify/ItemType";
import { isValid } from "./util";
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
type SnackbarState = {
  open: boolean;
  message: string;
  severity: AlertColor;
};
const theme = createTheme(themeOptions);
const App = () => {
  const [TrackPlaceholderString, setTrackPlaceholderString] =
    React.useState("");
  const [EpisodePlaceHolderString, setEpisodePlaceHolderString] =
    React.useState("");
  const [SnackBarState, setSnackBarState] = React.useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });
  const closeHandler = () => {
    setSnackBarState((prev) => ({ ...prev, open: false }));
  };
  const save = () => {
    if (
      isValid(TrackPlaceholder, TrackPlaceholderString) &&
      isValid(EpisodePlaceholder, EpisodePlaceHolderString)
    ) {
      chrome.storage.sync.set(
        {
          placeholder: {
            Track: TrackPlaceholderString,
            Episode: EpisodePlaceHolderString,
          },
        },
        () => {
          setSnackBarState({
            open: true,
            message: "Saved",
            severity: "success",
          });
        }
      );
    } else {
      setSnackBarState({
        open: true,
        message: "The required placeholder is missing.",
        severity: "error",
      });
    }
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
        open={SnackBarState.open}
        autoHideDuration={6000}
        onClose={closeHandler}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          onClose={closeHandler}
          severity={SnackBarState.severity}
          sx={{ width: "100%" }}
        >
          {SnackBarState.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
