import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'app/providers/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouterProps } from 'shared/config/routerConfig/routerConfig';
import { RequireRoles } from 'app/providers/router/ui/RequireRoles';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            <RequireRoles roles={route.roles}>
                                {element}
                            </RequireRoles>
                        </RequireAuth>
                    ) : element
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
