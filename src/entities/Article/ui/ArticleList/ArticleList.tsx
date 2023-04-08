import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleSkeletonItem } from 'entities/Article/ui/ArticleListItem/ArticleSkeletonItem';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleListView } from '../../model/types/article';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    isLoading: boolean;
    articles: Article[]
    view: ArticleListView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view,
    } = props;

    const renderArticles = (article: Article) => (
        <ArticleListItem key={article.title} article={article} view={view} />
    );

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
