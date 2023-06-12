import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import LeftArrow from '@/shared/assets/icons/left-arrow.svg';
import styles from './Sidebar.module.scss';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

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
            <VStack fullWidth>
                <AppLogo className={styles.logo} size={collapsed ? 40 : 60} />
                <VStack fullWidth justify="between">
                    <VStack fullWidth>
                        {listLinks}
                    </VStack>
                    <Icon
                        className={styles.collapseButton}
                        data-testid="sidebar-toggle"
                        clickable
                        size={16}
                        Svg={LeftArrow}
                        onClick={() => onToggleSidebar()}
                    />
                </VStack>
            </VStack>
            {collapsed ? (
                <VStack spaceBottom="16" gap="8">
                    <ThemeSwitcher />
                    <LangSwitcher />
                </VStack>
            ) : (
                <HStack spaceBottom="16" gap="8" justify="center" align="center">
                    <ThemeSwitcher />
                    <LangSwitcher />
                </HStack>
            )}
        </aside>
    );
});
