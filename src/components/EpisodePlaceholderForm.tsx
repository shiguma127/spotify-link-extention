import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import PlaceholderDiscription from "./PlaceholderDiscription";
import EpisodePlaceholder from "../EpisodePlaceholder";

const EpisodePlaceholderForm: React.VFC = () => {
  return (
    <Box>
      <Grid container sx={{
          paddingTop: "100px",
        }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="EpisodePlaceHolder"
            multiline
            rows={4}
            defaultValue="Default Value"
            sx={{
              width: "80%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <PlaceholderDiscription rows={EpisodePlaceholder} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EpisodePlaceholderForm;