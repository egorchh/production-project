import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleSkeletonItem } from 'entities/Article/ui/ArticleListItem/ArticleSkeletonItem';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleListView } from '../../model/types/article';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    isLoading: boolean;
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
        <div className={classNames('', {}, [className, styles[view]])}>
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
