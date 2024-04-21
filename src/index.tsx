import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom"
import { Grid, createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import reportWebVitals from './reportWebVitals';

import Home from "./routes/Home"
import Privacy from "./routes/Privacy"

import theme from './constants/theme';
import './index.scss';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Outlet />
      </Grid>
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "privacy",
        element: <Privacy />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
