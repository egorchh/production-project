import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/common/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { useNotification } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, error, isLoading } = useNotification(null, {
        pollingInterval: 60000,
    });

    if (error) {
        return <Text text="Ошибка при загрузке данных" />;
    }

    if (isLoading) {
        return (
            <VStack gap="12" fullWidth className={classNames(styles.notificationList, {}, [className])}>
                <Skeleton height={100} width="100%" borderRadius={10} />
                <Skeleton height={100} width="100%" borderRadius={10} />
                <Skeleton height={100} width="100%" borderRadius={10} />
                <Skeleton height={100} width="100%" borderRadius={10} />
            </VStack>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <VStack gap="12" fullWidth className={classNames(styles.notificationList, {}, [className])}>
            {data.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </VStack>
    );
});
