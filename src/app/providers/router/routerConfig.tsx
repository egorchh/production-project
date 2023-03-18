import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRouterProps, AppRoutes } from 'shared/config/routerConfig/routerConfig';
import { Page404 } from 'pages/Page404';
import { ProfilePage } from 'pages/ProfilePage';

export const routerConfig: Array<AppRouterProps> = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
    },
    {
        path: AppRoutes.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppRoutes.PAGE404,
        element: <Page404 />,
    },
];
