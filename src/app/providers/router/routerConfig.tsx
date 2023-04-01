import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import {
    AppRouterProps,
    AppRoutes,
} from 'shared/config/routerConfig/routerConfig';
import { Page404 } from 'pages/Page404';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

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
        path: `${AppRoutes.PROFILE}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppRoutes.ARTICLES,
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: `${AppRoutes.ARTICLE_DETAILS}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: AppRoutes.PAGE404,
        element: <Page404 />,
    },
];
