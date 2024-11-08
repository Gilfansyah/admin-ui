import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPassword from "./components/fragments/ForgotPassword";
import ErrorRoute from './pages/errorRoute';
import { useState, useEffect } from 'react';
import Dashboard from "./pages/dashboard";
import Balance from './pages/balance';

import Goals from './pages/Goals';


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      // element: <ProtectedRoute element={<Dashboard />} />,
      element: <Dashboard />,
      errorElement: < ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <Balance />,
    },
    {
      path: "/goals",
      element: <Goals />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;