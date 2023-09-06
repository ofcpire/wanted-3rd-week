import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../styles/globalStyle';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Layout;
