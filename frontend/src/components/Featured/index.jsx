import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { FeaturedBottomAmountStyled, FeaturedBottomDescStyled, FeaturedBottomStyled, FeaturedBottomSummaryItemResultStyled, FeaturedBottomSummaryItemStyled, FeaturedBottomSummaryItemTitleStyled, FeaturedBottomSummaryStyled, FeaturedBottomTitleStyled, FeaturedChart, FeaturedStyled, FeaturedTopStyled, FeaturedTopTitleStyled } from './styled';

const Featured = () => {
  return (
    <FeaturedStyled>
        <FeaturedTopStyled>
            <FeaturedTopTitleStyled>
                Top Revenue
            </FeaturedTopTitleStyled>
            <MoreVertOutlinedIcon fontSize='small' />
        </FeaturedTopStyled>
        <FeaturedBottomStyled>
          <FeaturedChart>
             <CircularProgressbar value={70} text='70%' strokeWidth={4} />
          </FeaturedChart>
          <FeaturedBottomTitleStyled>Total Sale made today</FeaturedBottomTitleStyled>
          <FeaturedBottomAmountStyled>$ 420</FeaturedBottomAmountStyled>
          <FeaturedBottomDescStyled>Previous Data ... </FeaturedBottomDescStyled>
          <FeaturedBottomSummaryStyled>
            <FeaturedBottomSummaryItemStyled>
              <FeaturedBottomSummaryItemTitleStyled>Target</FeaturedBottomSummaryItemTitleStyled>
              <FeaturedBottomSummaryItemResultStyled className="negative">
                <KeyboardArrowDownOutlinedIcon fontSize='small' />
                <div className="resultAmount">$ -13k</div>
              </FeaturedBottomSummaryItemResultStyled>
            </FeaturedBottomSummaryItemStyled>
            <FeaturedBottomSummaryItemStyled>
              <FeaturedBottomSummaryItemTitleStyled>Last Week</FeaturedBottomSummaryItemTitleStyled>
              <FeaturedBottomSummaryItemResultStyled className="positive">
                <KeyboardArrowUpOutlinedIcon fontSize='small' />
                <div className="resultAmount">$ 123k</div>
              </FeaturedBottomSummaryItemResultStyled>
            </FeaturedBottomSummaryItemStyled>
            <FeaturedBottomSummaryItemStyled>
              <FeaturedBottomSummaryItemTitleStyled>Last Month</FeaturedBottomSummaryItemTitleStyled>
              <FeaturedBottomSummaryItemResultStyled className="positive">
                <KeyboardArrowUpOutlinedIcon fontSize='small' />
                <div className="resultAmount">$ 123k</div>
              </FeaturedBottomSummaryItemResultStyled>
            </FeaturedBottomSummaryItemStyled>
          </FeaturedBottomSummaryStyled>
        </FeaturedBottomStyled>
    </FeaturedStyled>
  )
}

export default Featured
