import React, { useState, useCallback } from 'react';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Authenticate from './user/pages/Authenticate';
import { AuthContext } from './shared/context/auth-context';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  },[])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  },[])

  let router;

  if (isLoggedIn) {
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={<MainNavigation />}>
            <Route index element={<Users />} />
            <Route path='/:userId/places' element={<UserPlaces />} />
            <Route path='/places/new' element={<NewPlace />} />
            <Route path='/places/:placeId' element={<UpdatePlace />} />  {/*must be after places/new to avoid rendering 'new' as a placeId */}
            <Route path='*' element={<Users />} />
          </Route>
        </>
      )
    );
  } else {
     router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={<MainNavigation />}>
            <Route index element={<Users />} />
            <Route path='/:userId/places' element={<UserPlaces />} />
            <Route path='/auth' element={<Authenticate />} />
            <Route path='*' element={<Authenticate />} />
          </Route>
        </>
      )
    );
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout
    }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App;
