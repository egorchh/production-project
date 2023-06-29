import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppButton, AppButtonTheme,
    AppButtonSize,
} from '@/shared/ui/deprecated/AppButton';
import { VStack } from '@/shared/ui/common/Stack';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    collapsed?: boolean;
    listLinks: JSX.Element[];
    onToggleSidebar: VoidFunction;
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
        collapsed,
        listLinks,
        onToggleSidebar,
    } = props;

    return (
        <aside
            data-testid="sidebar"
            className={
                classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])
            }
        >
            <VStack justify="between" fullWidth>
                <VStack>
                    {listLinks}
                </VStack>
                <VStack spaceBottom="16" gap="8">
                    <LangSwitcher />
                    <ThemeSwitcher />
                </VStack>
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
        </aside>
    );
});
