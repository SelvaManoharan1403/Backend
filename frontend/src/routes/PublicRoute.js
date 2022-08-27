import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../pages/Layout';

const useAuth = () => {
  const user = localStorage.getItem('user');
  return user ? true : false;
}

const PublicRoute = () => {
  const auth = useAuth();

  return !auth ? <Outlet /> : <Layout><Navigate to='/dashboard' /></Layout>
}

export default PublicRoute