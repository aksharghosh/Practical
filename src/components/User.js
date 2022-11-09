import { Card } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useSelector } from "react-redux";

const User = (props) => {
  const apiData = useSelector((state) => state.apiSliceReducer.data);
  console.log(apiData);
  return (
    <>
      <Card variant="elevation" elevation={20} sx={{ overflow: "scroll" }}>
        <TableContainer component="div">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ "td, th": { border: 1 } }}>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((row) => (
                <TableRow key={row.id} sx={{ "td,  th": { border: 1 } }}>
                  <TableCell align="center">
                    <img src={`${row.avatar}`} alt="user-pic" />
                  </TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{`${row.first_name} ${row.last_name}`}</TableCell>
                  <TableCell align="center">
                    <a href="mailto:" style={{ color: "#3385ff" }}>
                      {row.email}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default User;
