import styled from 'styled-components'
import Button from '@mui/material/Button';

export const ButtonStyled = styled(Button)({
  '&&': {
    backgroundColor: '#05050b',
    borderColor: '#05050b',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#05050be3',
      borderColor: '#05050be3',
    }
  }
});
