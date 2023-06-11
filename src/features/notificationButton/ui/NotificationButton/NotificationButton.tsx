import React, { memo, useCallback, useState } from 'react';
import { AppButton, AppButtonTheme } from '@/shared/ui/deprecated/AppButton';
import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { DropdownDirection } from '@/shared/types/ui';
import { BottomSheet } from '@/shared/ui/deprecated/BottomSheet';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import styles from './NotificationButton.module.scss';

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
        <div>
            {isMobile ? (
                <>
                    {trigger}
                    <BottomSheet isOpen={isBottomSheetOpen} onClose={onCloseBottomSheet}>
                        <NotificationList />
                    </BottomSheet>
                </>
            ) : (
                <Popover
                    unmount
                    dropdownDirection={dropdownDirection}
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            )}
        </div>
    );
});
