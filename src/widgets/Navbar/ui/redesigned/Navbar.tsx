import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/AuthByUsername';
import styles from './Navbar.module.scss';
import { HStack } from '@/shared/ui/common/Stack';

export interface NavbarProps {
  className?: string;
  isOpenAuthModal: boolean;
  onShowAuthModal: VoidFunction;
  onCloseAuthModal: VoidFunction;
}

export const Navbar = memo((props: NavbarProps) => {
    const {
        className,
        isOpenAuthModal,
        onShowAuthModal,
        onCloseAuthModal,
    } = props;

    return (
        <HStack
            className={classNames(styles.navbar, {}, [className])}
            gap="16"
        >
            <NotificationButton />
            <AvatarDropdown onShowModal={onShowAuthModal} />
            <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
        </HStack>
    );
});
