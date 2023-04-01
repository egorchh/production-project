import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const data = [
    {
        id: '1',
        user: {
            id: '1',
            username: '1',
        },
        text: 'text',
    },
];

describe('articleDetailsCommentsSlice.test', () => {
    test('successfully fetched comments', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(data, '', ''),
        ))
            .toEqual({
                ...state,
                entities: {
                    1: data[0],
                },
                ids: ['1'],
            });
    });

    test('pending fetched comments', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        ))
            .toEqual({
                ...state,
                isLoading: true,
            });
    });
});
