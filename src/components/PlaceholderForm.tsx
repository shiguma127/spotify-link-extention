import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PlaceholderDiscription from "./PlaceholderDiscription";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PlaceholderDiscriptionType } from "../../type/PlaceholderDiscriptionType";

type propsType = {
  placeholderDiscription: PlaceholderDiscriptionType[];
  placeholderType: string;
  onChange?: Function;
};

const PlaceholderForm:React.VFC<propsType>= (props) => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: "20px",
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="EpisodePlaceHolder"
              multiline
              rows={4}
              onChange={(e) => { props.onChange(e.target.value) }}
              defaultValue={"#NowListening\n%name%\n%url%"}
              sx={{
                width: "60vw",
              }}
            />
            <Accordion
              sx={{
                width: "100%",
                marginTop: "30px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{props.placeholderType}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PlaceholderDiscription rows={props.placeholderDiscription} />
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlaceholderForm;
