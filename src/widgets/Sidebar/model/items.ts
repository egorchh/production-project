import React from 'react';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import ArticleIcon from 'shared/assets/icons/article-page.svg';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';

export interface SidebarItemInterface {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemInterface[] = [
    {
        path: AppRoutes.MAIN,
        Icon: MainIcon,
        text: 'MAIN',
    },
    {
        path: AppRoutes.ABOUT,
        Icon: AboutIcon,
        text: 'ABOUT',
    },
    {
        path: AppRoutes.PROFILE,
        Icon: ProfileIcon,
        text: 'PROFILE',
        authOnly: true,
    },
    {
        path: AppRoutes.ARTICLES,
        Icon: ArticleIcon,
        text: 'ARTICLES',
        authOnly: true,
    },
];
