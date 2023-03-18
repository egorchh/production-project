import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = '/',
    ABOUT = 'about',

    PROFILE = 'profile',
    PAGE404 = '*'
}
