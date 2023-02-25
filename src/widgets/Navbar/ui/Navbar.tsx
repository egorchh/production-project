import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const { t } = useTranslation();

    const onCloseAuthModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <AppButton
                theme={AppButtonTheme.CLEAR}
                onClick={onShowAuthModal}
                className={styles.singIn}
            >
                {t('Войти')}
            </AppButton>
            <LangSwitcher className={styles.lang} />
            <ThemeSwitcher />
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
        </div>
    );
}
