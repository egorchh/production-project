import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown/ui/AvatarDropdown';
import { BottomSheet } from 'shared/ui/BottomSheet/BottomSheet';
import { NotificationList } from 'entities/Notification';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onShowAuthModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    const onCloseAuthModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    return (
        <HStack
            className={classNames(styles.navbar, {}, [className])}
            justify="end"
            align="center"
            fullWidth
        >
            <NotificationButton />
            <AvatarDropdown onShowModal={onShowAuthModal} />
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
        </HStack>
    );
});
