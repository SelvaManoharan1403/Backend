import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../pages/Layout';

const useAuth = () => {
  const user = localStorage.getItem('user');
  return user ? true : false;
}
const ProtectRoute = () => {

  const auth = useAuth();

  return auth ? <Layout><Outlet /></Layout> : <Navigate to='/login' />
}

export default ProtectRoute