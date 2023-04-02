import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const comments = [
    {
        articleId: '1',
        userId: '1',
        text: 'text',
    },
    {
        articleId: '2',
        userId: '2',
        text: 'text',
    },
];

const state: DeepPartial<StateSchema> = {
    articleDetails: {
        data: {
            id: '1',
        },
    },
    user: {
        authData: {
            id: '1',
        },
    },
};

describe('fetchCommentsByArticleId.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, state);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comments);
    });

    test('error no data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('error status of request', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 500 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
