import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { PlaceholderDiscriptionType } from "../../type/PlaceholderDiscriptionType";
import PlaceholderDiscriptionTableHeader from "./PlaceholderDiscriptionTableHeader";

const PlaceholderDiscription: React.VFC<{
  rows: Array<PlaceholderDiscriptionType>;
}> = (props) => {
  return (
    <TableContainer>
      <Table>
        <PlaceholderDiscriptionTableHeader />
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.placeholder}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.placeholder}
              </TableCell>
              <TableCell align="right">{row.required.toString()}</TableCell>
              <TableCell align="right">{row.discription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlaceholderDiscription;
