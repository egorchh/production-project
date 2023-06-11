import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { MenuDropdown, MenuDropdownItem } from '@/shared/ui/deprecated/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import styles from './AvatarDropdown.module.scss';
import { AppRoutes } from '@/shared/const/router';

interface avatarDropdownProps {
    onShowModal: VoidFunction;
}

export const AvatarDropdown = memo(({ onShowModal }: avatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    const dropdownItems: MenuDropdownItem[] = [
        {
            content: authData ? t('Выйти') : t('Войти'),
            onClick: authData ? onLogout : onShowModal,
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
        <MenuDropdown
            className={styles.dropdown}
            items={dropdownItems}
            dropdownDirection="left"
            trigger={<Avatar src={authData?.avatar} size={35} />}
        />
    );
});
