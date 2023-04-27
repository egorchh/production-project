import { RouteProps } from 'react-router-dom';
import { UserRole } from 'entities/User';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = '/',
    ABOUT = 'about',

    PROFILE = '/profile/', // + :id
    ARTICLES = 'articles',
    ARTICLE_DETAILS = '/articles/', // + :id
    ARTICLE_CREATE = '/articles/new',
    ARTICLE_EDIT = '/articles/:id/edit',
    ADMIN_PANEL = '/admin',
    PAGE404 = '*',
    FORBIDDEN = '/forbidden'
}
