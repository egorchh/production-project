import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemInterface } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarItem as SidebarItemDeprecated } from './deprecated/SidebarItem';
import { SidebarItem as SidebarItemRedesigned } from './redesigned/SidebarItem';

interface SidebarItemProps {
    item: SidebarItemInterface
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<SidebarItemRedesigned item={item} collapsed={collapsed} isAuth={isAuth} />}
            off={<SidebarItemDeprecated item={item} collapsed={collapsed} isAuth={isAuth} />}
        />
    );
};
