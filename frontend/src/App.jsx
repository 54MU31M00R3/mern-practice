import React from 'react';
import './App.css';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Users />} />
        <Route path='*' element={<Users />} />
        <Route path='/places/new' element={<NewPlace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
