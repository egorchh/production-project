import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleListView, ArticleType } from '@/entities/Article';
import { initArticlesPage } from './initArticlesPage';

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
        _inited: false,
    },
};

describe('initArticlesPage.test', () => {
    test('page didnt init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, state);

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('page was already inited', async () => {
        const initedState = {
            articlesPage: {
                ...state.articlesPage,
                _inited: true,
            },
        };

        const thunk = new TestAsyncThunk(initArticlesPage, initedState);

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
