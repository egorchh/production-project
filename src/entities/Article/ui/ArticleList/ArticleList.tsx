import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleListView } from '../../model/consts/consts';
import { ArticleSkeletonItem } from '../ArticleListItem/ArticleSkeletonItem';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    isLoading?: boolean;
    articles: Article[];
    view: ArticleListView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view,
        target,
    } = props;

    const renderArticles = (article: Article) => (
        <ArticleListItem target={target} key={article.title} article={article} view={view} />
    );

    if (!isLoading && !articles.length) {
        // eslint-disable-next-line i18next/no-literal-string
        return <Text align={TextAlign.LEFT} title="Статьи не найдены" />;
    }

    return (
        <div
            className={classNames('', {}, [className, styles[view]])}
            data-testid="ArticleList"
        >
            {
                articles?.length > 0
                    ? articles.map(renderArticles)
                    : null
            }
            {isLoading && (
                <div className={classNames('', {}, [className, styles[view]])}>
                    {
                        new Array(view === ArticleListView.LIST ? 3 : 9)
                            .fill(0)
                            .map((item, index) => (
                                <ArticleSkeletonItem key={index} view={view} />
                            ))
                    }
                </div>
            )}
        </div>
    );
});
