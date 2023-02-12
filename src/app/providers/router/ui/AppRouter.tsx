import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'app/providers/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routerConfig.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
