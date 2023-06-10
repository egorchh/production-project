import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    fetchNextArticlePage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlePage';
import {
    getArticlesError,
} from '../../model/selectors/articles';
import {
    articlesPageReducer,
} from '../../model/slices/articlePageSlice';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleGreetingModal } from '@/features/ArticleGreetingModal';

interface ArticlesPageProps {
    className?: string;
}

const initialReducer: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const error = useSelector(getArticlesError);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    if (error) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={false}>
            <Page data-testid="ArticlesPage" onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
                <ArticlePageFilters />
                <ArticleInfiniteList />
                <ArticleGreetingModal />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
