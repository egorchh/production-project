import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();

    const onToggleSidebar = () => {
        setCollapsed((prevState) => !prevState);
    };

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
            <button data-testid="sidebar-toggle" type="button" onClick={onToggleSidebar}>
                {collapsed ? t('Развернуть') : t('Свернуть')}
            </button>
        </div>
    );
}
