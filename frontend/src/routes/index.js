import { Navigate, Route, Routes } from 'react-router-dom';
import '../App.css'
import Dashboard from '../pages/Dashboard';
import ForgetPassword from '../pages/ForgetPassword';
import Investigate from '../pages/Investigate';
import Login from '../pages/Login';
import Manufacture from '../pages/Manufacture';
//import ErrorPage from './404erroe';
import ProtectRoute from './ProtectRoute';
import PublicRoute from './PublicRoute';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manufacture" element={<Manufacture />} />
          <Route path="/investigate" element={<Investigate />} />

          <Route path="*" element={<Navigate to='/dashboard' />} />
          {/*<Route path="*" element={<ErrorPage />} />*/}
        </Route>
        <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgetPassword />} />
          </Route>
      </Routes>
      <ToastContainer theme="colored" position="top-center" autoClose="1000" />
    </>
  );
}

export default App;
