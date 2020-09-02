import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(
  entity,
  assestcategory,
  assest,
  threat,
  vulnerability,
  riskscore
) {
  return { entity, assestcategory, assest, threat, vulnerability, riskscore };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right" style={{ backgroundColor: "#0d47a1" }}>
              نوع ریسک
            </StyledTableCell>
            <StyledTableCell align="right" style={{ backgroundColor: "#0d47a1" }}>
              نمره ریسک
            </StyledTableCell>
            <StyledTableCell
              style={{ backgroundColor: "#0d47a1" }}
              align="right"
            >
              آسیب پذیری
            </StyledTableCell>
            <StyledTableCell
              style={{ backgroundColor: "#0d47a1" }}
              align="right"
            >
              تهدید
            </StyledTableCell>
            <StyledTableCell
              style={{ backgroundColor: "#0d47a1" }}
              align="right"
            >
              دارایی
            </StyledTableCell>
            <StyledTableCell
              style={{ backgroundColor: "#0d47a1" }}
              align="right"
            >
              نوع دارایی
            </StyledTableCell>
            <StyledTableCell
              style={{ backgroundColor: "#0d47a1" }}
              align="right"
            >
              موجودیت
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tablecontent.map(row => (
            <StyledTableRow key={row.Entity}>
               <StyledTableCell align="right">{row.RiskLevel}</StyledTableCell>
              <StyledTableCell align="right">{row.RiskScore}</StyledTableCell>
              <StyledTableCell align="right">
                {row.Vulnerability}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Threat}</StyledTableCell>
              <StyledTableCell align="right">{row.Asset}</StyledTableCell>
              <StyledTableCell align="right">
                {row.AssetCategory}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Entity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
