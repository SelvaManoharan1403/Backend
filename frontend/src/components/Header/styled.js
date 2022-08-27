import styled from 'styled-components'

export const HeaderWrapperStyled = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 1.6rem 3rem rgb(0 0 0 / 10%);
  background-color: hsla(0,0%,100%,.5);
  border-bottom: 0 solid #f8f9fa;
  box-shadow: 0 1.6rem 3rem rgb(0 0 0 / 10%);
  color: #000;
  display: flex;
  height: 5rem;
  padding: 0 20px;
  position: sticky;
  top: 0;
  margin-top: 20px;
`
export const DropDownListStyled = styled.div`
  right: 0;
  position: absolute;
  top: ${props => props.isOpen ? '120%' : '180%' };
  z-index: 1000;
  float: left;
  min-width: 13rem;
  padding: 0.65rem 0;
  margin: 0.125rem 0 0;
  font-size: 0.88rem;
  color: #495057;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  visibility:  ${props => props.isOpen ? 'visible' : 'hidden' };
  background: white;
  transition: all .2s ease-in-out;
  .dropdownItem {
    text-transform: uppercase;
    font-size: 0.7333333333rem;
    color: #868e96;
    font-weight: bold;
    padding: 0.5rem 1rem;
    list-style: none;
    padding: 10px 20px;
    &:hover {
      color: #000;
    }
  }
  h3 {
    font-size: 16px;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  ul {
    padding: 10px 0 0;
  }
  a {
    color: #868e96;
    &:hover {
      color: #000;
    }
  }
`
export const DropDownMenuStyled = styled.div`
  position: relative;
  cursor: pointer;
`
