import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentText, getAddCommentError } from './addCommentSelectors';

const initialState: DeepPartial<StateSchema> = {
    addComment: {
        error: undefined,
        text: 'nothing',
    },
};

describe('getAddCommentSelectors', () => {
    test('get comment text', () => {
        expect(getAddCommentText(initialState as StateSchema)).toEqual('nothing');
    });

    test('get comment error', () => {
        expect(getAddCommentError(initialState as StateSchema)).toEqual(undefined);
    });
});
