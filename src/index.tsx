import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom"
import { Grid, createTheme, ThemeProvider, CssBaseline, Container, Box } from '@mui/material';

import reportWebVitals from './reportWebVitals';

import Home from "./routes/Home"
import Privacy from "./routes/Privacy"

import theme from './constants/theme';
import './index.scss';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid2 container textAlign={"center"} m={0} p={0}>
        <Outlet />
      </Grid2>
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
        element: <Home />
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
