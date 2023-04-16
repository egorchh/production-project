import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <>
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
            </>
        );
    }

    return (
        <div className={classNames(styles.commentList, {}, [className])}>
            {
                comments?.length ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        className={styles.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                )) : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
