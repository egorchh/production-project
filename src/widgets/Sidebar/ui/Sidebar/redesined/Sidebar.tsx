import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';
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
                classNames(styles.sidebar, {}, [className])
            }
        >
            <AppLogo className={styles.logo} />
        </aside>
    );
});