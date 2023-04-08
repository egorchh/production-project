import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleListView } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/selectArticleView';
import { Page } from 'widgets/Page/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    fetchNextArticlePage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlePage';
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/articles';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlePageSlice';

interface ArticlesPageProps {
    className?: string;
}

const initialReducer: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);

    const onChangeView = useCallback((view: ArticleListView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

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
            <Page onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
