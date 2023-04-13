import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsCommentsReducer,
} from '../slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
