import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui";
import {LangSwitcher, ThemeSwitcher} from "widgets";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <LangSwitcher className={styles.lang} />
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
                    MAIN
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
                    ABOUT
                </AppLink>
            </div>
        </div>
    );
};
