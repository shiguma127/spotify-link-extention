import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React from "react";
import { PlaceholderDiscription } from "../../type/PlaceholderDiscription";
import PlaceholderDiscriptionTableHeader from "./PlaceholderDiscriptionTableHeader";

const PlaceholderDiscription: React.VFC<Array<PlaceholderDiscription>> = (
  rows
) => {
  return (
    <TableContainer>
      <PlaceholderDiscriptionTableHeader />
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.placeholder}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.placeholder}
            </TableCell>
            <TableCell align="right">{row.required}</TableCell>
            <TableCell align="right">{row.discription}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default PlaceholderDiscription;
