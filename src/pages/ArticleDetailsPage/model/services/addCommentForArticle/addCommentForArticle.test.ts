import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { addCommentForArticle } from './addCommentForArticle';

const comment = {
    articleId: '1',
    userId: '1',
    text: 'text',
};

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

describe('addCommentForArticle.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });

    test('error no data', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('error and comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
