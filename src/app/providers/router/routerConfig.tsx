import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';

export const routerConfig: Array<RouteProps> = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
    },
];
