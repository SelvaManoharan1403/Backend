import React from 'react'
import { 
  MenuIconsStyled,
  MenuLinkStyled,
  NavDropdownStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavSubMenuStyled,
  MenuContainerStyled,
  DropdownIconStyled
} from './styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SubMenu = ({ item, keyValue, showSubNav, isActive, isStyleOpen}) => {
  if(item.menuInner){
  return (
    <MenuContainerStyled>
        <NavLinkWrapperStyled  onClick={showSubNav}>
          <MenuIconsStyled>{item.icon}</MenuIconsStyled>
          <MenuLinkStyled>{item.name}</MenuLinkStyled>
          <DropdownIconStyled>
            {isActive === keyValue ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </DropdownIconStyled>
        </NavLinkWrapperStyled>
        <NavDropdownStyled>
        <NavSubMenuStyled isActive={isActive === keyValue} isStyleOpen={isStyleOpen}>
          { item.menuInner?.map((inner, i) => (
              <div key={i} >
                <NavLinkStyled to={inner.path} key={i}>
                  <NavLinkWrapperStyled>
                    <MenuIconsStyled>{inner.icon}</MenuIconsStyled>
                    <MenuLinkStyled>{inner.name}</MenuLinkStyled>
                  </NavLinkWrapperStyled>
                </NavLinkStyled>
              </div>
            ))
          }
        </NavSubMenuStyled>
        </NavDropdownStyled>
    </MenuContainerStyled>
  )
  } else {
      return (
        <NavLinkStyled to={item.path}>
          <NavLinkWrapperStyled>
            <MenuIconsStyled>{item.icon}</MenuIconsStyled>
            <MenuLinkStyled>{item.name}</MenuLinkStyled>
          </NavLinkWrapperStyled>
        </NavLinkStyled>
      )
  }
}

export default SubMenu
