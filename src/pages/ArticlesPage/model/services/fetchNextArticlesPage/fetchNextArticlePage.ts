import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesIsLoading,
    getArticlesPageHasMore,
    getArticlesPageNumber,
} from '../../selectors/articles';
import {
    articlesPageActions,
} from '../../slices/articlePageSlice';
import {
    fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlePage',
        async (_, thunkAPI) => {
            const { dispatch, getState } = thunkAPI;
            const page = getArticlesPageNumber(getState());
            const hasMore = getArticlesPageHasMore(getState());
            const isLoading = getArticlesIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
