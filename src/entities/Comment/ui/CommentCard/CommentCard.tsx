import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { AppRoutes } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div
                className={classNames(styles.commentCard, {}, [className])}
                data-testid="CommentCard.Loading"
            >
                <div className={styles.userInfoWrapper}>
                    <Skeleton height={40} width={40} borderRadius="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        borderRadius={4}
                        className={styles.usernameSkeleton}
                    />
                </div>
                <Skeleton width="100%" height={70} borderRadius={4} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(styles.commentCard, {}, [className])}
            data-testid="CommentCard.Content"
        >
            <AppLink
                to={`${AppRoutes.PROFILE}${comment.user.id}`}
                className={styles.userInfoWrapper}
            >
                {
                    comment.user.avatar
                    && <Avatar src={comment.user.avatar} className={styles.avatar} size={40} />
                }
                <Text text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} align={TextAlign.LEFT} />
        </div>
    );
});
