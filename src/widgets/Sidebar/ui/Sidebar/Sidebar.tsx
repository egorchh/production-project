import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppButton, AppButtonTheme, AppLink, AppLinkTheme,
} from 'shared/ui';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import MainIconDark from 'shared/assets/icons/main-page-dark.svg';
import MainIconLight from 'shared/assets/icons/main-page-light.svg';
import AboutIconDark from 'shared/assets/icons/about-page-dark.svg';
import AboutIconLight from 'shared/assets/icons/about-page-light.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();
    const { theme } = useTheme();

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
            <div className={styles.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {
                        theme === Theme.DARK
                            ? <MainIconDark className={styles.icon} />
                            : <MainIconLight className={styles.icon} />
                    }
                    <p className={styles.text}>
                        {t('MAIN')}
                    </p>
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {
                        theme === Theme.DARK
                            ? <AboutIconDark className={styles.icon} />
                            : <AboutIconLight className={styles.icon} />
                    }
                    <p className={styles.text}>
                        {t('ABOUT')}
                    </p>
                </AppLink>
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
}
