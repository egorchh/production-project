import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppButton, AppButtonTheme } from 'shared/ui';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleAuthModal = useCallback(() => {
        setIsOpenAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <AppButton
                theme={AppButtonTheme.CLEAR}
                onClick={onToggleAuthModal}
                className={styles.singIn}
            >
                {t('Войти')}
            </AppButton>
            <LangSwitcher className={styles.lang} />
            <ThemeSwitcher />
            <Modal isOpen={isOpenAuthModal} onClose={onToggleAuthModal} />
        </div>
    );
}
