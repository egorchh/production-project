import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetailsData';

describe('getProfileData', () => {
    test('initial state', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        expect(getArticleDetailsData({} as StateSchema)).toEqual(undefined);
    });

    test('with loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('with undefined isLoading', () => {
        expect(getArticleDetailsIsLoading({} as StateSchema)).toEqual(undefined);
    });

    test('with error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'some error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('some error');
    });

    test('with undefined error', () => {
        expect(getArticleDetailsError({} as StateSchema)).toEqual(undefined);
    });
});
