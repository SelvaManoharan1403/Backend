import React, { useState } from 'react'
import useHover from '../../customHooks/useHover'
import LastPageIcon from '@mui/icons-material/LastPage';
import SubMenu from './SubMenu';
import { MainWrapperStyled, SidebarBarsStyled, SidebarTopSectionStyled, SidebarWrapperStyled } from './styled';
import MenuItem from './data';

const SideBar = ({children}) => {
  const [hoverRef, isHovering] = useHover();
  const [isActive, setIsActive] = useState(false);
  const showSubNav = (index ) => {
    if(isActive === index) {
      return setIsActive(null)
    }
    setIsActive(index);
  }
  return (
    <div className='container'>
      <SidebarWrapperStyled
        ref={hoverRef}
        isStyleOpen={isHovering}>
        <SidebarTopSectionStyled>
          {/*<h1 className='logo'>Logo</h1>*/}
          <SidebarBarsStyled>
            <LastPageIcon />
          </SidebarBarsStyled>
        </SidebarTopSectionStyled>
        {
          MenuItem?.map((item, i) => (
            <SubMenu 
              key={i}
              item={item}
              keyValue={i}
              isActive={isActive}
              isStyleOpen={isHovering}
              showSubNav={() => showSubNav(i)} 
            />
          ))
        }
      </SidebarWrapperStyled>
      <MainWrapperStyled>{children}</MainWrapperStyled>
    </div>
  )
}

export default SideBar
