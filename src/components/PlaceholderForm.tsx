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
import React, { useEffect } from "react";
import PlaceholderDiscription from "./PlaceholderDiscription";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PlaceholderDiscriptionType } from "../../type/PlaceholderDiscriptionType";
import { ItemType } from "../../type/spotify/ItemType";

type propsType = {
  placeholderDiscription: PlaceholderDiscriptionType[];
  ItemType: ItemType;
  onChange?: Function;
};

const PlaceholderForm: React.VFC<propsType> = (props) => {
  const [defaultValue, setDefaultValue] = React.useState<string>("");
  useEffect(() => {
    chrome.storage.sync.get("placeholder", (value) => {
      const placeholder = value.placeholder[props.ItemType.type];
      if (placeholder.trim()) {
        setDefaultValue(placeholder);
      } else {
        setDefaultValue(props.ItemType.defaultPlaceholder);
      }
    });
  }, []);
  useEffect(() => {
    props.onChange(defaultValue);
  }, [defaultValue]);
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
              label={"PlaceHolder"}
              multiline
              rows={4}
              onChange={(e) => {
                setDefaultValue(e.target.value);
              }}
              defaultValue={defaultValue}
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
                <Typography>{props.ItemType.type + "Placeholder"}</Typography>
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
