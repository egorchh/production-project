import React, { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LoginModal } from '@/features/AuthByUsername';
import { HStack } from '@/shared/ui/deprecated/Stack';
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <nav
                    className={classNames(styles.navbar_redesigned, {}, [className])}
                >
                    <NotificationButton />
                    <AvatarDropdown onShowModal={onShowAuthModal} />
                    <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
                </nav>
            )}
            off={(
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
            )}
        />
    );
});
