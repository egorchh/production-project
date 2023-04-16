import { ArticleListView, ArticleType } from 'entities/Article/model/types/article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlePageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const data = [
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
    {
        id: '2',
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

describe('articlesPageSlice.test', () => {
    test('setView', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
            view: ArticleListView.PLATE,
        };

        expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setView(ArticleListView.LIST)))
            .toEqual({
                ...state,
                view: ArticleListView.LIST,
            });
    });

    test('initial view', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.initState()))
            .toEqual({
                ...state,
                _inited: true,
                limit: 4,
                view: ArticleListView.LIST,
            });
    });

    test('fetch article details pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(articlesPageReducer(state as ArticlesPageSchema, fetchArticlesList.pending))
            .toEqual({
                isLoading: true,
            });
    });

    // test('fetch article details fulfilled', () => {
    //     const state: DeepPartial<StateSchema> = {
    //         articlesPage: {
    //             isLoading: false,
    //             error: undefined,
    //             entities: { 1: data[0] },
    //             ids: ['1'],
    //             view: ArticleListView.LIST,
    //         },
    //     };
    //
    //     expect(articlesPageReducer(
    //         state as ArticlesPageSchema,
    //         fetchArticlesList.fulfilled(data, '', {}),
    //     ))
    //         .toEqual({
    //             ...state,
    //             entities: {},
    //             ids: [],
    //         });
    // });
});
