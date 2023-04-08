import { Article, ArticleListView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    view?: ArticleListView;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}
