import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import styled from 'styled-components'

import CenterBox  from '../../components/CenterBox'
import { Avatar, Box, Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useUserContext } from '../../context/userContext';
import { toast } from 'react-toastify';
import AuthService from '../../api/Services/auth.service';

const schema = yup.object().shape({
  emailId: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
}).required();

const Login = () => {
  const { logIn } = useUserContext()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })    


  const loginHandler = (values) => {
    AuthService.login(values.emailId, values.password).then(
      (res) => {
        navigate('/dashboard')
        logIn(res.data)
      },
      error => {
        toast.error(error.response.data.data)
      }
    );
  }
  return (
    <CenterBox>
    <LoginWrapperStyled>
      <LoginInnerStyled>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#05050b', width: '80px', height: '80px' }}>
            <LockOutlinedIcon sx={{ fontSize: '40px'}} />
          </Avatar>
          <Typography mb={1} component="h1" variant="h5">
            Welcome to this Project
          </Typography>
          <Typography   sx={{ color: '#05050b', textAlign: 'center' }} mb={2} component="p" variant="p">
            Please sign-in to your account and start the adventure
          </Typography>
          <Box component="form" onSubmit={handleSubmit(loginHandler)} noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register('emailId', {
                required: true,
              })}
            />
            {errors.emailId && (
              <div className="error-message">*{errors.emailId?.message}</div>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <div className="error-message">*{errors.password?.message}</div>
            )}
            <ButtonStyled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </ButtonStyled>
            <Grid container>
              <Grid item xs>
              <Link to="/forgotPassword">Forgot Password</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </LoginInnerStyled>
    </LoginWrapperStyled>
    </CenterBox>
  )
}
const ButtonStyled = styled(Button)({
  '&&': {
    backgroundColor: '#05050b',
    borderColor: '#05050b',
    padding: '15px',
    '&:hover': {
      backgroundColor: '#05050be3',
      borderColor: '#05050be3',
    }
  }
});

const LoginWrapperStyled = styled.div`
  
`

const LoginInnerStyled = styled.div`
 
`

export default Login