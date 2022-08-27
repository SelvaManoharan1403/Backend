 import { Base64 } from 'js-base64'
import { createContext, useContext, useState } from  'react'

 const User = {
  userDetail: {},
  isGuestUser: true,
 }

 export const userContext = createContext({
  user: null,
  userValue: () => {},
  logIn: () => {},
  logOut: () => {} 
 })

 export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(User)

  const logIn = (user) => {
    let userToken = user.accessToken.split('.')[1];
    setUser({ 
      isGuestUser: false,
      userDetail: JSON.parse(Base64.decode(userToken))
    })
  }

  const logOut = () => {
    setUser(User)
  }

  const userValue = (dataValue) => {
    setUser({
      ...user,
      userValue: dataValue
    })
  }

  return <userContext.Provider value={{ user, userValue, logIn, logOut }}>{children}</userContext.Provider>
 }

 export const useUserContext = () => {
  const { userValue, user, logIn, logOut } = useContext(userContext)
  return { userValue, user, logIn, logOut }
 }