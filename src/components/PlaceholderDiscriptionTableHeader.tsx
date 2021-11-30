import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const PlaceholderDiscriptionTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            fontWeight: "bold",
          }}
        >
          PlaceHolder
        </TableCell>
        <TableCell
          align="right"
          sx={{
            fontWeight: "bold",
          }}
        >
          require
        </TableCell>
        <TableCell
          align="right"
          sx={{
            fontWeight: "bold",
          }}
        >
          Discription
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PlaceholderDiscriptionTableHeader;
