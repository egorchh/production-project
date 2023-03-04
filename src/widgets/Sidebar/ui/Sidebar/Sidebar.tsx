import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import {
    AppButton, AppButtonTheme,
} from 'shared/ui';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { useTheme } from 'app/providers/ThemeProvider';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const { theme } = useTheme();

    const onToggleSidebar = () => {
        setCollapsed((prevState) => !prevState);
    };

    const listLinks = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                theme={theme}
                collapsed={collapsed}
            />
        )),
        [collapsed, theme],
    );

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    styles.sidebar,
                    { [styles.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <div className={styles.links}>
                {listLinks}
            </div>
            <AppButton
                data-testid="sidebar-toggle"
                type="button"
                className={styles.button}
                square
                size={AppButtonSize.M}
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggleSidebar}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
        </div>
    );
});
