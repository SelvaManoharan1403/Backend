import styled, { css } from 'styled-components'

const WidgetLeftRight = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
  }
  .counter {
      font-size: 28px;
      font-weight: 300;
  }
  .link {
      font-size: 12px;
      border-bottom: 2px solid white;
      width: max-content;
      cursor: pointer;
  }
  .percentage {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      background: white;
      padding: 2px 5px;
      border-radius: 4px;
      &.positive {
          color: green;
      }
      &.negative {
          color: red;
      }
  }
  .icon {
      padding: 5px;
      font-size: 18px;
      border-radius: 5px;
      align-self: flex-end;
  }
`

export const WidgetContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  justify-content: space-between;
  box-shadow: 1px 0px 8px 2px rgba(0,0,0,0.4); 
  border-radius: 8px;
  height: 100px;
  background-image: ${props => props.backgroundImage };
  color: white;
`

export const WidgetLeft = styled.div`
  ${WidgetLeftRight}
`

export const WidgetRight = styled.div`
  ${WidgetLeftRight}
`
