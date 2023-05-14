import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleBlockCode } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => (
        <div className={classNames(styles.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    ),
);
