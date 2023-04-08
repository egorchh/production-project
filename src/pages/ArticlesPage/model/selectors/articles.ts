import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/Article';

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view
    || ArticleListView.PLATE;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
