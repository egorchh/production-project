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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
