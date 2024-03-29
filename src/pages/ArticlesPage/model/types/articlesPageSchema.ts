import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleListView,
    ArticleSortField,
    ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view?: ArticleListView;
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    type: ArticleType;

    _inited: boolean;
}
