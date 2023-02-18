import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <LangSwitcher className={styles.lang} />
            <ThemeSwitcher />
        </div>
    );
}
