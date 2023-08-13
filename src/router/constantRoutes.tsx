import React from 'react';
import { baseRouter } from '../interface/router';
import { Navigate } from 'react-router-dom';
import Login from '../pages/login';

const constantRouter: baseRouter[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default constantRouter;
