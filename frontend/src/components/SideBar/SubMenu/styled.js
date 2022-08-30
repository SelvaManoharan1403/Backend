import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavDropdownStyled = styled.div`
transition: all .2s ease-in-out;
`
export const NavLinkStyled = styled(NavLink)({
  color: '#fff',
  fontSize: '22px',
});
export const NavLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 7px;
  margin-bottom: 12px;
  border-radius: 6px;
  transition: all .2s ease-in-out;
  position: relative;
  &:hover {
    background-color: #707070;
  }
`
export const MenuIconsStyled = styled.div`
  margin-right: 20px;
  display: flex;
  font-size: 22px;
`
export const MenuLinkStyled = styled.div`
  font-size: 14px;
  white-space: nowrap;
`

export const NavSubMenuStyled = styled.div`
  height: ${props => props.isActive ? 'auto' : '0' };
  transition: all .2s ease-in-out;
  padding-left: ${props => props.isActive && props.isStyleOpen ? '20px' : '0'};
`
export const MenuContainerStyled = styled.div`
  overflow: hidden;
  cursor: pointer;
`

export const DropdownIconStyled = styled.div`
  padding-left: 20px;
  padding-top: 6px;
  svg {
    font-size: 18px;
  }
`
