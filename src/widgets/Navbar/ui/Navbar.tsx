import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <LangSwitcher className={styles.lang} />
            <div className={styles.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    MAIN
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    ABOUT
                </AppLink>
            </div>
        </div>
    );
}
