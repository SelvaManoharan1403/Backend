import styled from 'styled-components'

export const FeaturedStyled = styled.div`
  flex: 2;
  box-shadow: 1px 0px 8px 2px rgba(0,0,0,0.4);
  padding: 10px;
  border-radius: 8px;
`
export const FeaturedTopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: grey;
`
export const FeaturedTopTitleStyled = styled.div`
  font-size: 16px;
  font-weight: 500;
`
export const FeaturedBottomStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  gap: 15px;
`
export const FeaturedBottomTitleStyled = styled.p`
  font-weight: 500;
  color: grey;
`
export const FeaturedBottomAmountStyled = styled.p`
  font-size: 30px;
`
export const FeaturedBottomDescStyled = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`
export const FeaturedBottomSummaryStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const FeaturedBottomSummaryItemStyled = styled.div`
  text-align: center;
`
export const FeaturedBottomSummaryItemTitleStyled = styled.div`
  font-size: 14px;
  color: gray;
`
export const FeaturedBottomSummaryItemResultStyled = styled.div`
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  &.positive {
      color: green;
  }
  &.negative {
      color: red;
  }
`
export const FeaturedChart = styled.div`
  width: 200px;
  height: 200px;
`
