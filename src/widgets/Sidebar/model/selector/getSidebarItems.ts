import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { AppRoutes } from '@/shared/config/routerConfig/routerConfig';
import MainIcon from '@/shared/assets/icons/main-page.svg';
import AboutIcon from '@/shared/assets/icons/about-page.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page.svg';
import ArticleIcon from '@/shared/assets/icons/article-page.svg';
import { SidebarItemInterface } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, ((userData) => {
    const sidebarItemsList: SidebarItemInterface[] = [
        {
            path: AppRoutes.MAIN,
            SidebarIcon: MainIcon,
            text: 'MAIN',
        },
        {
            path: AppRoutes.ABOUT,
            SidebarIcon: AboutIcon,
            text: 'ABOUT',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: AppRoutes.PROFILE + userData.id,
                SidebarIcon: ProfileIcon,
                text: 'PROFILE',
                authOnly: true,
            },
            {
                path: AppRoutes.ARTICLES,
                SidebarIcon: ArticleIcon,
                text: 'ARTICLES',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
}));
