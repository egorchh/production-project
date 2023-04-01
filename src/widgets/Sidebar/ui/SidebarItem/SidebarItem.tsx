import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Icon } from 'shared/ui/Icon/Icon';
import { SidebarItemInterface } from 'widgets/Sidebar/model/types/sidebar';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemInterface
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        path,
        text,
        SidebarIcon,
    } = item;
    const isAuth = useSelector(getUserAuthData);

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
