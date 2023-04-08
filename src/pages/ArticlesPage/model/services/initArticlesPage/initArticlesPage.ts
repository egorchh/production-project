import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import {
    fetchArticlesList,
} from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articles';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (_, thunkAPI) => {
            const { dispatch, getState } = thunkAPI;
            const inited = getArticlesPageInited(getState());

            console.log(inited);

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
