import React from 'react'
import MainRoute from './routes'
import { UserContextProvider } from './context/userContext'

const App = () => {
  return (
    <UserContextProvider>
      <MainRoute />
    </UserContextProvider>
  )
}

export default App