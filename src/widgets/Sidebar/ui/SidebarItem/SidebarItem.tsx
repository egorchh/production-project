import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { SidebarItemInterface } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemInterface
    theme?: Theme
    collapsed: boolean
}

export const SidebarItem = ({ item, theme, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        path, text, IconLight, IconDark,
    } = item;

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
