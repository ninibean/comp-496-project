import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function createData(letter, numGrade) {
  return { letter, numGrade };
}

const rows = [
  createData('A', 4.00),
  createData('A-', 3.70),
  createData('B+', 3.30),
  createData('B', 3.00),
  createData('B-', 2.70),
  createData('C+', 2.30),
  createData('C', 2.00),
  createData('C-', 1.70),
  createData('D+', 1.30),
  createData('D', 1.00),
  createData('F', 0.00),
];

export default function BasicTable() {
  return (
      <Table sx={{ maxWidth: 350 }} size="small" aria-label="dense table">
        <TableHead>
          <TableRow>
            <TableCell>Letter Grade</TableCell>
            <TableCell>Numerical Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow 
              key={row.letter}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.letter}
              </StyledTableCell>
              <StyledTableCell align="right">{row.numGrade}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  );
}