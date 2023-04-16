import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { useSearchParams } from 'shared/lib/hooks/useSearchParams/useSearchParams';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { getArticlesPageInited } from '../../selectors/articles';
import {
    fetchArticlesList,
} from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (_, thunkAPI) => {
            const { dispatch, getState } = thunkAPI;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = useSearchParams('order');
                const sortFromUrl = useSearchParams('sort');
                const searchFromUrl = useSearchParams('search');
                const typeFromUrl = useSearchParams('type');

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
                }

                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
                }

                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl));
                }

                if (typeFromUrl) {
                    dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
