import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (
        <>
            {drawerIsOpen ? <Backdrop closeDrawer={closeDrawer} /> : null}
            <SideDrawer show={drawerIsOpen} close={closeDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            {/* {drawerIsOpen && <SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>} */}
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainNavigation