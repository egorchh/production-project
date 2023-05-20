import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { Page404 } from '@/pages/Page404';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRouterProps } from '@/shared/types/router';
import { AppRoutes } from '@/shared/const/router';

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
        path: `${AppRoutes.ARTICLE_EDIT}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: `${AppRoutes.ARTICLE_CREATE}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: `${AppRoutes.ADMIN_PANEL}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    {
        path: AppRoutes.PAGE404,
        element: <Page404 />,
    },
    {
        path: AppRoutes.FORBIDDEN,
        element: <ForbiddenPage />,
    },
];
