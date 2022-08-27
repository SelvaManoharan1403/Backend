import React, { useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import DropdownItem from '../DropDown/DropDownItem';
import { DropDownListStyled, DropDownMenuStyled, HeaderWrapperStyled } from './styled';
import AuthService from '../../api/Services/auth.service';
import { Base64 } from 'js-base64';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const dropdownRef = useRef()
  const logOutHandler = () => {
    AuthService.logout();
  }
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setUserName(JSON.parse(Base64.decode(user.accessToken.split('.')[1])).name)
  }, [])
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.addEventListener('click', closeDropdown)
  },[])
  return (
    <HeaderWrapperStyled>
      <div>
        <h3 style={{textTransform: 'capitalize'}}>Hi {userName}...</h3>
      </div>
      <DropDownMenuStyled>
        <div ref={dropdownRef} onClick={() => setIsOpen(!isOpen)}>
        <Avatar alt="user" src="https://media-exp1.licdn.com/dms/image/C5603AQHJ9jlx3L2eXA/profile-displayphoto-shrink_800_800/0/1516891232598?e=1665014400&v=beta&t=WpcQsPtxUbiFraoeeWpRApJ5saRqwX23McPEjQucJhQ" />
        </div>
        <DropDownListStyled isOpen={isOpen}  className={`dropdown ${isOpen ? 'open' : 'closed' }`}>
          <h3 style={{textTransform: 'capitalize'}}>{userName} UI Developer</h3>
          <ul>
            <DropdownItem text="My Profile" />
            <DropdownItem text="Log Out" textLink="/login" onClick={logOutHandler} />
          </ul>
        </DropDownListStyled>
      </DropDownMenuStyled>
    </HeaderWrapperStyled>
  )
}

export default Header
