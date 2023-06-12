import { useTranslation } from 'react-i18next';
import React from 'react';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { SidebarItemInterface } from '../../../model/types/sidebar';
import { User } from '@/entities/User';

import styles from './SidebarItem.module.scss';

interface SidebarItemDeprecatedProps {
    item: SidebarItemInterface
    collapsed: boolean
    isAuth?: User;
}

export const SidebarItem = ({ item, collapsed, isAuth }: SidebarItemDeprecatedProps) => {
    const { t } = useTranslation();
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
            theme={AppLinkTheme.SECONDARY}
        >
            <Icon Svg={SidebarIcon} className={styles.icon} />
            <p className={styles.text}>
                {t(text)}
            </p>
        </AppLink>
    );
};
