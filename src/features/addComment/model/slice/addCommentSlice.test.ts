import { AddCommentSchema } from 'features/addComment';
import { addCommentReducer, addCommentActions } from './addCommentSlice';

describe('addCommentSlice.test', () => {
    test('successfully set text', () => {
        const state: DeepPartial<AddCommentSchema> = {
            text: '',
            error: undefined,
        };

        expect(addCommentReducer(
            state as AddCommentSchema,
            addCommentActions.setText('Hello world!'),
        ))
            .toEqual({
                ...state,
                text: 'Hello world!',
            });
    });
});
