import React, { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Navbar as NavbarRedesigned } from './redesigned/Navbar';
import { Navbar as NavbarDeprecated } from './deprecated/Navbar';

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
                <NavbarRedesigned
                    className={className}
                    isOpenAuthModal={isOpenAuthModal}
                    onCloseAuthModal={onCloseAuthModal}
                    onShowAuthModal={onShowAuthModal}
                />
            )}
            off={(
                <NavbarDeprecated
                    className={className}
                    isOpenAuthModal={isOpenAuthModal}
                    onCloseAuthModal={onCloseAuthModal}
                    onShowAuthModal={onShowAuthModal}
                />
            )}
        />
    );
});
