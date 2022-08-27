import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import data from './data';
import { ChartGridStyled, ChartStyled, TitleStyled } from './styled';

const chart = ({aspect, title}) => {
  return (
    <ChartStyled>
      <TitleStyled>{title}</TitleStyled>
      <ResponsiveContainer 
        width="100%"
        aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray' />
          <ChartGridStyled strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartStyled>
  )
}

export default chart
