import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRoute";
import { useState, useEffect } from 'react';
import DashboardPage from './pages/dashboard';
import BalancePage from './pages/balance';

// Komponen ProtectedRoute
const ProtectedRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulasi pengecekan login, bisa diganti dengan pengecekan sesungguhnya dari localStorage atau cookie
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn);
  }, []);

  // Jika belum login, arahkan ke halaman login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Jika sudah login, tampilkan elemen yang dilindungi
  return element;
};

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRouter />,
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
      element: <BalancePage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;