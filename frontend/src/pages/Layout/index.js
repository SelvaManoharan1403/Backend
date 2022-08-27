import React from 'react'
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import styled from 'styled-components'

const Layout = ({children}) => {
  return (
    
    <SideBar>
      <Header />
        <SiteContainerStyled>
          {children}
        </SiteContainerStyled>
      <Footer />
    </SideBar>
  )
}

const SiteContainerStyled = styled.div`
  min-height: 72%;
  margin: 30px 0;
`

export default Layout