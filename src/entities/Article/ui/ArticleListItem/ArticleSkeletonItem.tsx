import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleListView } from '../../model/consts/consts';
import styles from './ArticleListItem.module.scss';

interface ArticleSkeletonItemProps {
    className?: string;
    view: ArticleListView
}

export const ArticleSkeletonItem = memo((props: ArticleSkeletonItemProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleListView.LIST) {
        return (
            <div
                className={classNames(styles.articlesWrapperList, {}, [className, styles[view]])}
            >
                <div className={styles.topSide}>
                    <div className={styles.header}>
                        <div className={styles.userInfo}>
                            <Skeleton width={30} height={30} borderRadius="50%" />
                            <Skeleton width={55} height={15} />
                        </div>
                        <Skeleton width={55} height={15} />
                    </div>
                    <Skeleton width={250} height={30} />
                    <Skeleton
                        width={500}
                        height={30}
                        className={styles.types}
                    />
                </div>
                <Skeleton className={styles.img} width="100%" height={250} />
                <div className={styles.textContent}>
                    <Skeleton width="100%" height={200} />
                </div>
                <div className={styles.footer}>
                    <Skeleton width={190} height={60} />
                    <Skeleton width={140} height={60} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.PLATE, {}, [className, styles[view]])}>
            <div className={styles.articlesWrapperPlate}>
                <Skeleton height={200} width={200} />
                <div className={styles.datePlate}>
                    <Skeleton className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.topSide}>
                        <Skeleton className={styles.types} height={20} />
                    </div>
                    <Skeleton />
                </div>
            </div>
        </div>
    );
});
