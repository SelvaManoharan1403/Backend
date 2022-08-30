import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import CenterBox from '../../components/CenterBox';
import { Box, Grid, styled, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AuthService from '../../api/Services/auth.service';
import { toast } from 'react-toastify';
import { Watch } from 'react-loader-spinner'

const schema = yup.object().shape({
  email: yup.string().email().required(),
}).required();

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const forgotHandler = (values) => {
    setIsLoading(true)
    AuthService.forgetPassword(values.email).then(
      (res) => {
        setIsLoading(false)
        setIsSuccess(!isSuccess)
      },
      error => {
        setIsLoading(false)
        toast.error(error.response.data.data)
      }
    );
  }
  return (
    <CenterBox>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          { isLoading ?
            <>
              <Watch
                height="50"
                width="50"
                radius="48"
                color="#05050b"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              /> 
              <Typography mb={1} sx={{marginTop: "10px"}} component="h1" variant="h5">
                Loading...!
              </Typography>
            </>
            : <>
        { isSuccess ?
          <>
            <Typography mb={1} component="h1" variant="h5">
              Successfully Send...!
            </Typography>
            <Typography  sx={{ color: '#05050b', textAlign: 'center' }} mb={2} component="p" variant="p">
              You will receive a link to create a new password via email.
            </Typography>
            <ButtonStyled
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                <Link style={{ color: '#fff' }} to="/login">Return to login</Link>
            </ButtonStyled>
          </> :
          <>
            <Typography mb={1} component="h1" variant="h5">
              Forgot password
            </Typography>
            <Typography  sx={{ color: '#05050b', textAlign: 'center' }} mb={2} component="p" variant="p">
              Lost your password? Please enter your email address. You will receive a link to create a new password via email.
            </Typography>
            <Box component="form" onSubmit={handleSubmit(forgotHandler)} noValidate sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register('email', {
                  required: true,
                })}
              />
              {errors.email && (
                <div className="error-message">*{errors.email?.message}</div>
              )}
              <ButtonStyled
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Reset Password
              </ButtonStyled>
              <Grid container>
                <Grid item xs>
                <Link to="/login">Remember your password?</Link>
                </Grid>
              </Grid>
            </Box>
          </>
        }
        </>
      }
      </Box>
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

export default ForgotPassword