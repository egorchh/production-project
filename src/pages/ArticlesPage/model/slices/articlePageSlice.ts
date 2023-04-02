import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleListView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ARTICLE_VIEW } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleListView.LIST,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW) as ArticleListView;
        },
    },
    extraReducers: (builder) => builder
    // fetchArticlesList

        .addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload);
        })
        .addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlePageSlice;
