import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const PlaceholderDiscriptionTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>PlaceHolder</TableCell>
        <TableCell align="right">require</TableCell>
        <TableCell align="right">Discription</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PlaceholderDiscriptionTableHeader;
