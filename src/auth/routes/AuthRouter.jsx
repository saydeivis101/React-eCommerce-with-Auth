import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginComponent } from '../components/login/LoginComponent'
import { Typography } from '@mui/material'

export const AuthRouter = () => {
  return (
     <>
      <div className="auth-title">
      <Typography variant='h4' component='h1' className='container auth-title'>Start Shopping!</Typography>
      </div>
      
      <Routes>
        <Route path='/*' element={<LoginPage/>} />
        <Route path='register' element={<RegisterPage/>} />
      </Routes>
     </>
  )
}
