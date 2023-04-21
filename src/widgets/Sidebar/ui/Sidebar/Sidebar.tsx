import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import {
    AppButton, AppButtonTheme,
} from 'shared/ui';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { getSidebarItems } from '../../model/selector/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemList = useSelector(getSidebarItems);

    const onToggleSidebar = () => {
        setCollapsed((prevState) => !prevState);
    };

    const listLinks = useMemo(
        () => sidebarItemList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed, sidebarItemList],
    );

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])
            }
        >
            <VStack>
                {listLinks}
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
            </VStack>
        </div>
    );
});
