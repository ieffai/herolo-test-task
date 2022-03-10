import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routes/publicRoutes';
import { HOME_ROUTE } from '../routes/routesConsts';


const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={HOME_ROUTE} replace />}
            />
        </Routes>
    );
};

export default memo(AppRouter);