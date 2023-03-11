import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { SidebarItemInterface } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemInterface
    collapsed: boolean
    theme?: Theme
}

export const SidebarItem = ({ item, theme, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        path,
        text,
        IconLight,
        IconDark,
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
            {
                theme === Theme.DARK
                    ? <IconDark className={styles.icon} />
                    : <IconLight className={styles.icon} />
            }
            <p className={styles.text}>
                {t(text)}
            </p>
        </AppLink>
    );
};
