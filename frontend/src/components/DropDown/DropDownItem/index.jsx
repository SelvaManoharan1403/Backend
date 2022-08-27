import React from 'react'

const Index = ({ Icon, text, textLink, onClick}) => {
  return (
    <li className='dropdownItem' onClick={onClick}>
      {Icon}
      <a href={textLink}>{text}</a>
    </li>
  )
}

export default Index