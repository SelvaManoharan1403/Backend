import styled from 'styled-components'
import { CartesianGrid } from 'recharts';

export const ChartStyled = styled.div`
  flex: 4;
  box-shadow: 1px 0px 8px 2px rgba(0,0,0,0.4);
  padding: 10px;
  color: gray;
  border-radius: 8px;
`
export const TitleStyled = styled.div`
  margin-bottom: 20px;
`
export const ChartGridStyled = styled(CartesianGrid)`
  stroke: rgb(238, 238, 238);
`
