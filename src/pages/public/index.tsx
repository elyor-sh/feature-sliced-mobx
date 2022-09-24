import React from 'react';
import {Outlet} from 'react-router-dom'

const PublicRoutes = () => {
    return (
        <>
          <Outlet />
        </>
    );
};

export {PublicRoutes}