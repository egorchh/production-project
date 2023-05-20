import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from './model/types';

import {
    articleDetailsCommentsReducer,
} from './model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from './model/slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
