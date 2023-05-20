import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleBlockImage } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleBlockImage;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => (
        <div className={classNames(styles.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={styles.image} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    ),
);
