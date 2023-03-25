import { Text, TextAlign } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockText } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => (
        <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={styles.title}
                    align={TextAlign.LEFT}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    align={TextAlign.LEFT}
                    key={paragraph}
                    className={styles.paragraph}
                    text={paragraph}
                />
            ))}
        </div>
    ),
);
