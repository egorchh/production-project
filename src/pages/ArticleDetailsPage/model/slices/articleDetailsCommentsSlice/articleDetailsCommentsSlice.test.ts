import {
    fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageSchema } from '../../types';
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
        const state: DeepPartial<ArticleDetailsPageSchema['comments']> = {
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsPageSchema['comments'],
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
        const state: DeepPartial<ArticleDetailsPageSchema['comments']> = {
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsPageSchema['comments'],
            fetchCommentsByArticleId.pending,
        ))
            .toEqual({
                ...state,
                isLoading: true,
            });
    });
});
