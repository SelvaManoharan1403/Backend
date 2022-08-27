import React from 'react'
import { BoxWrapperStyled, BoxInnerStyled } from './styled'

const CenterBox = ({children}) => {
  return (
    <BoxWrapperStyled>
      <BoxInnerStyled>{children}</BoxInnerStyled>
    </BoxWrapperStyled>
  )
}

export default CenterBox