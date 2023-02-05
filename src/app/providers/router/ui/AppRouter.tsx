import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "app/providers/router/routerConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Routes>
                {routerConfig.map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
