import React, { memo, useCallback, useState } from 'react';
import { AppButton, AppButtonTheme } from '@/shared/ui/deprecated/AppButton';
import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import { DropdownDirection } from '@/shared/types/ui';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { ToggleFeatures } from '@/shared/lib/features';
import { NotificationButton as NotificationButtonDeprecated } from './deprecated/NotificationButton';
import { NotificationButton as NotificationButtonRedesigned } from './redesigned/NotificationButton';

interface NotificationButtonProps {
    invertedColor?: boolean;
    dropdownDirection?: DropdownDirection;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { invertedColor = false, dropdownDirection } = props;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenBottomSheet = () => {
        if (isMobile) {
            setIsBottomSheetOpen(true);
        }
    };

    const onCloseBottomSheet = useCallback(() => {
        setIsBottomSheetOpen(false);
    }, []);

    const trigger = (
        <AppButton onClick={onOpenBottomSheet} theme={AppButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} invertedColor={invertedColor} />
        </AppButton>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <NotificationButtonRedesigned
                    dropdownDirection={dropdownDirection}
                    isMobile={isMobile}
                    onCloseBottomSheet={onCloseBottomSheet}
                    onOpenBottomSheet={onOpenBottomSheet}
                />
            )}
            off={(
                <NotificationButtonDeprecated
                    invertedColor={invertedColor}
                    dropdownDirection={dropdownDirection}
                    isMobile={isMobile}
                    onCloseBottomSheet={onCloseBottomSheet}
                    onOpenBottomSheet={onOpenBottomSheet}
                />
            )}
        />
    );
});
