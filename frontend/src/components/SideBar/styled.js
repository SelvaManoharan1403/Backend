import styled from 'styled-components'

export const MainWrapperStyled = styled.main`
  padding-left: 100px;
  height: 100vh;
  padding-right: 30px;
`
export const SidebarWrapperStyled = styled.div`
  box-shadow: 0 1.6rem 3rem rgb(0 0 0 / 10%);
  overflow: hidden;
  border-right: 0 solid #05050b;
  bottom: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  top: 0;
  transition: all .2s ease-in-out;
  z-index: 1;
  padding: 12px;
  width: ${(props) => props.isStyleOpen ? '195px' : '36px'};
  background: ${(props) => props.isStyleOpen ? '#101010e3' : '#101010'};
  border-radius: 10px;
  margin: 20px;
`
export const SidebarTopSectionStyled = styled.div`
  margin-bottom: 50px;
  margin-top: 20px;
  text-align: center;
`
export const SidebarBarsStyled = styled.div`
  text-align: right;
  padding-right: 5px;
`
