import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
function createData(unit_cm, S, M, L, XL, XXL) {
  return { unit_cm, S, M, L, XL, XXL };
}

const rows = [
  createData("Bust", "76 - 82", "82 - 88", "88 - 94", "94 - 100", "100 - 106"),
  createData("Waist", "68 - 74", "74 - 79", "79 - 84", "84 - 89", "89 - 94"),
  createData("Hip", "84 - 89", "89 - 96", "96 - 101", "101 - 106", "106 - 111"),
  createData("Height", "152 - 160", "160 - 164", "164 - 170", "170 - 176", "176 - 180"),
];

export default function TableSizeGuide() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 380 }} aria-label="size guide">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontSize: '0.75rem' }}>in cm</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>S</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>M</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>L</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>XL</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>XXL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow 
              key={row.unit_cm}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '0.75rem' }}>
                {row.unit_cm}
              </TableCell>
              <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>{row.S}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>{row.M}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>{row.L}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>{row.XL}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontSize: '0.75rem' }}>{row.XXL}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
