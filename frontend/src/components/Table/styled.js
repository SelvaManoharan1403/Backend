import styled from 'styled-components'
import TableContainer from '@mui/material/TableContainer';

export const TableCellWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`
export const TableImageStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`
export const TableStatusStyled = styled.span`
  padding: 8px;
  border-radius: 4px;
  &.Approved {
      color: green;
      background-color: rgba(0, 128, 0, 0.276);
  }
  &.Pending {
      color: goldenrod;
      background-color: rgba(218, 165, 32, 0.338);
  }
`
export const TableContainerStyled = styled(TableContainer)({
  '&&': {
    boxShadow: 'none',
  }
});