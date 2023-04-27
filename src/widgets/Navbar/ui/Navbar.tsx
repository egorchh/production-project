import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { MenuDropdown, MenuDropdownItem } from 'shared/ui/Menu/MenuDropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseAuthModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    const dropdownItems: MenuDropdownItem[] = [
        {
            content: authData ? t('Выйти') : t('Войти'),
            onClick: authData ? onLogout : onShowAuthModal,
        },
    ];

    const routesForAdmin = [
        {
            content: t('Админ Панель'),
            href: AppRoutes.ADMIN_PANEL,
        },
    ];

    const routesForManager = [{}];

    const routesForAuthUser = [
        {
            content: t('Профиль'),
            href: AppRoutes.PROFILE + String(authData?.id),
        },
    ];

    if (authData) {
        dropdownItems.unshift(...routesForAuthUser);
    }

    if (isAdmin) {
        dropdownItems.unshift(...routesForAdmin);
    }

    if (isManager) {
        dropdownItems.unshift(...routesForManager);
    }

    return (
        <HStack
            className={classNames(styles.navbar, {}, [className])}
            justify="end"
            align="center"
            fullWidth
        >
            <MenuDropdown
                className={styles.dropdown}
                items={dropdownItems}
                dropdownDirection="left"
                trigger={<Avatar src={authData?.avatar} size={35} />}
            />
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
        </HStack>
    );
});
