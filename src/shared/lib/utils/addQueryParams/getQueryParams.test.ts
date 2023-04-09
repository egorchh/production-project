import { getQueryParams } from './addQueryParams';

describe('getQueryParams.test', () => {
    test('with one param', () => {
        const params = getQueryParams({
            test: 'test',
        });

        expect(params).toBe('?test=test');
    });

    test('with second param', () => {
        const params = getQueryParams({
            test: 'test',
            second: 'hello',
        });

        expect(params).toBe('?test=test&second=hello');
    });

    test('with undefined param', () => {
        const params = getQueryParams({
            test: 'test',
            second: undefined,
        });

        expect(params).toBe('?test=test');
    });
});
