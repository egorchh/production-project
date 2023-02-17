import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <LangSwitcher className={styles.lang} />
            <div className={styles.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {t('MAIN')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('ABOUT')}
                </AppLink>
            </div>
        </div>
    );
}
