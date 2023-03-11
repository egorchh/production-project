import React from 'react';
import MainIconDark from 'shared/assets/icons/main-page-dark.svg';
import MainIconLight from 'shared/assets/icons/main-page-light.svg';
import AboutIconDark from 'shared/assets/icons/about-page-dark.svg';
import AboutIconLight from 'shared/assets/icons/about-page-light.svg';
import ProfileIconLight from 'shared/assets/icons/profile-page-light.svg';
import ProfileIconDark from 'shared/assets/icons/profile-page-dark.svg';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';

export interface SidebarItemInterface {
    path: string;
    text: string;
    IconLight: React.VFC<React.SVGProps<SVGSVGElement>>;
    IconDark: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemInterface[] = [
    {
        path: AppRoutes.MAIN,
        IconLight: MainIconLight,
        IconDark: MainIconDark,
        text: 'MAIN',
    },
    {
        path: AppRoutes.ABOUT,
        IconLight: AboutIconLight,
        IconDark: AboutIconDark,
        text: 'ABOUT',
    },
    {
        path: AppRoutes.PROFILE,
        IconLight: ProfileIconLight,
        IconDark: ProfileIconDark,
        text: 'PROFILE',
        authOnly: true,
    },
];
