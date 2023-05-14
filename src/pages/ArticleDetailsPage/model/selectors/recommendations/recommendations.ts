import { StateSchema } from '@/app/providers/StoreProvider';

// eslint-disable-next-line
export const getArticleDetailsRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.error;
};

// eslint-disable-next-line
export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.isLoading || false;
};
