import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rows from './data'
import { 
  TableCellWrapperStyled,
  TableImageStyled,
  TableStatusStyled,
  TableContainerStyled
} from './styled';

const TableList = () => {
  return (
    <div className='tableList'>
      <TableContainerStyled component={Paper} className='tableList__wrapper'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <TableCellWrapperStyled>
                    <TableImageStyled src={row.img} alt="" /> {row.product}
                  </TableCellWrapperStyled>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <TableStatusStyled className={row.status}>{row.status}</TableStatusStyled>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </div>
  )
}

export default TableList
