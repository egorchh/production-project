import React from 'react';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { SidebarItemInterface } from '../../../model/types/sidebar';
import { User } from '@/entities/User';
import styles from './SidebarItem.module.scss';

interface SidebarItemRedesignedProps {
    item: SidebarItemInterface
    collapsed: boolean
    isAuth?: User;
}

export const SidebarItem = ({ item, collapsed, isAuth }: SidebarItemRedesignedProps) => {
    const {
        path,
        text,
        SidebarIcon,
    } = item;

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(styles.sidebarItem, { [styles.collapsed]: collapsed }, [])}
            to={path}
            variant="primary"
            activeClassName={styles.active}
        >
            <Icon Svg={SidebarIcon} className={styles.icon} />
            {!collapsed && <p className={styles.text}>{text}</p>}
        </AppLink>
    );
};
