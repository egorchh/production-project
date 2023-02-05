import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
                    MAIN PAGE
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
                    ABOUT PAGE
                </AppLink>
            </div>
        </div>
    );
};
