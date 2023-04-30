import React, { memo } from 'react';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationsIcon from 'shared/assets/icons/notifications.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { DropdownDirection } from 'shared/types/ui';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    invertedColor?: boolean;
    dropdownDirection?: DropdownDirection;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { invertedColor = false, dropdownDirection } = props;

    return (
        <Popover
            dropdownDirection={dropdownDirection}
            trigger={(
                <AppButton theme={AppButtonTheme.CLEAR}>
                    <Icon Svg={NotificationsIcon} invertedColor={invertedColor} />
                </AppButton>
            )}
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
