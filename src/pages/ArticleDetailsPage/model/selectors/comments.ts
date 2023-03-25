import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line
export const getArticleDetailsCommentsError = (state: StateSchema) => {
    return state.articleDetailsComments?.error;
};

// eslint-disable-next-line
export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsComments?.isLoading;
};
