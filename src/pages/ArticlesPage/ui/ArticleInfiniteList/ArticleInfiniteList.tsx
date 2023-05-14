import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticles,
} from '../../model/slices/articlePageSlice';
import {
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/articles';
import {
    initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <ArticleList
            view={view}
            isLoading={isLoading}
            articles={articles}
        />
    );
});
