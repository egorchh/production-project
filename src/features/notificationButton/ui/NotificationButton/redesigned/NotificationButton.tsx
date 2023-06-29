import React, { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationsIcon from '@/shared/assets/icons/notifications.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { DropdownDirection } from '@/shared/types/ui';
import { BottomSheet } from '@/shared/ui/deprecated/BottomSheet';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    dropdownDirection?: DropdownDirection;
    isMobile?: boolean;
    isBottomSheetOpen?: boolean;
    onOpenBottomSheet: VoidFunction;
    onCloseBottomSheet: VoidFunction;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        dropdownDirection,
        isMobile,
        isBottomSheetOpen,
        onOpenBottomSheet,
        onCloseBottomSheet,
    } = props;

    const trigger = (
        <Icon Svg={NotificationsIcon} clickable onClick={onOpenBottomSheet} />
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
