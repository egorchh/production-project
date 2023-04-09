import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { fetchArticlesList } from './fetchArticlesList';

const articles = [
    {
        id: '1',
        title: 'title',
        user: {
            username: 'egoorch',
            id: '1',
            avatar: 'https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp',
        },
        subtitle: 'subtitle',
        img: 'img',
        views: 2,
        createdAt: 'date',
        type: [ArticleType.IT, ArticleType.ECOLOGY],
        blocks: [],
    },
];

const state: DeepPartial<StateSchema> = {
    articlesPage: {
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
        view: ArticleListView.LIST,
    },
    user: {
        authData: {
            id: '1',
        },
    },
};

describe('fetchArticlesList.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, state);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));

        const result = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articles);
    });

    test('error no data', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));

        const result = await thunk.callThunk({});

        expect(result.meta.requestStatus).toBe('rejected');
    });

    test('error status of request', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 500 }));

        const result = await thunk.callThunk({});

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
