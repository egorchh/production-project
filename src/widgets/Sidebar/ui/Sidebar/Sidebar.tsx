import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { AppButton } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);

    const onToggleSidebar = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <AppButton onClick={onToggleSidebar}>Toggle</AppButton>
        </div>
    );
}
