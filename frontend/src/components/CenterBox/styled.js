import styled from 'styled-components'

export const BoxWrapperStyled = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
&::before {
  content: '';
  width: 0;
  height: 0;
  border-width: 0 0px 100vh 100vw;
  border-color: transparent transparent #05050b transparent;
  border-style: solid;
  position: absolute;
  z-index: -1;
}
`
export const BoxInnerStyled = styled.div`
width: 500px;
box-shadow: 0 1.6rem 3rem rgb(0 0 0 / 10%);
background-color: #fff;
border-bottom: 0 solid #f8f9fa;
box-shadow: 0 1.6rem 3rem #00000063;
color: #000;
padding: 70px 50px;
border-radius: 16px;
`
