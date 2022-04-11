import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";

export default function Cxrili() {
  function createData(position, prize) {
    return { position, prize };
  }
  const rows = [
    createData("1", 40000),
    createData("2", 20000),
    createData("3", 8000),
    createData("4-10", 40000),
    createData("1-20", 2000),
    createData("21-50", 800),
  ];
  return (
    <Stack direction="row" justifyContent="center">
      <Box sx={{ width: "500px" }}>
        <TableContainer sx={{ bgcolor: "#203248" }} component={Paper}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow sx={{}}>
                <TableCell sx={{ color: "#56606C", textAlign: "center" }}>
                  ადგილი
                </TableCell>
                <TableCell
                  sx={{ color: "#56606C", textAlign: "center" }}
                  align="right"
                >
                  პრიზი
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.position}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "white",
                      bgcolor: "#162332",
                      border: "none",
                      borderBottom: "5px solid #203248",
                      borderRight: "5px solid #203248",
                      textAlign: "center",
                      width: "150px",
                    }}
                  >
                    {row.position}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      bgcolor: "#162332",
                      border: "none",
                      textAlign: "center",

                      borderBottom: "5px solid #203248",
                    }}
                  >
                    {row.prize}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
}
