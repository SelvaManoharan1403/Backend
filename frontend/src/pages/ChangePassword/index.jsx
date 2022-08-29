import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import CenterBox from '../../components/CenterBox';
import { Box, TextField, Typography } from '@mui/material';
import { ButtonStyled } from './styled'
import { useEffect } from 'react';
import AuthService from '../../api/Services/auth.service';

const schema = yup.object().shape({
  password: yup.string()
      .required('Password is mandatory')
      .min(8, 'Password must be at 8 char long')
      .max(32, 'Password maximum at 32 char long'),
  confirmPassword: yup.string()
      .required('Password is mandatory')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
});

const ForgotPassword = () => {
  const navigate = useNavigate()

  const params = useParams();
  console.log(params); 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const changeHandler = (values) => {
    //navigate('/dashboard')
    console.log(values.password)
    AuthService.resetPasswordService(values.password, params.token).then(
      (res) => {
        navigate('/login')
      },
      error => {
        //navigate('/login')
      }
    );
  }
  useEffect(()=> {
    AuthService.changePasswordService(params.token).then(
      (res) => {

      },
      error => {
        navigate('/login')
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <CenterBox>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography mb={1} component="h1" variant="h5">
          Change password
        </Typography>
        <Typography  sx={{ color: '#05050b', textAlign: 'center' }} mb={2} component="p" variant="p">
          Enter a new password below to change your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit(changeHandler)} noValidate sx={{ mt: 1, width: '100%' }}>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="confirmPassword"
            type="text"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true,
            })}
          />
          {errors.confirmPassword && (
            <div className="error-message">*{errors.confirmPassword?.message}</div>
          )}
          <ButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Change Password
          </ButtonStyled>
        </Box>
      </Box>
    </CenterBox>
  )
}

export default ForgotPassword