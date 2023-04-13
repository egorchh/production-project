import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './comments';

const initialState: DeepPartial<StateSchema> = {
    articleDetailsPage: {
        comments: {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    },
};

describe('getArticleDetailsCommentsState', () => {
    test('get error', () => {
        expect(getArticleDetailsCommentsError(initialState as StateSchema)).toEqual(undefined);
    });

    test('get loading status', () => {
        expect(getArticleDetailsCommentsIsLoading(initialState as StateSchema)).toEqual(false);
    });
});
