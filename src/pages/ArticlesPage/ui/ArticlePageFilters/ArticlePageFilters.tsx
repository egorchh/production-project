import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ArticleListView, ArticleSortField, ArticleType,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from '@/features/selectArticleView';
import { Input } from '@/shared/ui/deprecated/Input';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/deprecated/Card';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesView,
} from '../../model/selectors/articles';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import styles from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo(({ className }: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replaceData: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleListView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeType = useCallback((tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [fetchData, dispatch]);

    return (
        <div className={classNames(styles.articlePageFilters, {}, [className])}>
            <Card>
                <div className={styles.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                </div>
                <Input
                    className={styles.search}
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    data-testid="ArticleSearch"
                />
            </Card>
            <ArticleTypeTabs
                className={styles.tabs}
                value={type}
                onTabClick={onChangeType}
            />
        </div>
    );
});
