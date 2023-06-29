import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CartDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card as CartRedesigned } from '@/shared/ui/redesigned/Card';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={(
                <CartRedesigned
                    className={classNames(styles.notificationItem, {}, [className])}
                    padding="16"
                    variant="outlined"
                >
                    <TextRedesigned title={notification.title} text={notification.description} />
                </CartRedesigned>
            )}
            off={(
                <CartDeprecated theme={CardTheme.OUTLINED} className={classNames(styles.notificationItem, {}, [className])}>
                    <TextDeprecated title={notification.title} text={notification.description} />
                </CartDeprecated>
            )}
        />
    );

    if (notification.href) {
        return (
            <a className={styles.link} href={notification.href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
