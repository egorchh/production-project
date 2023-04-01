import { ArticleType } from 'entities/Article/model/types/article';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../servises/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const data = {
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
};

describe('articleDetailsSlice.test', () => {
    test('fetch article details pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
            isLoading: true,
        });
    });

    test('fetch article details fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            data,
            isLoading: false,
            error: undefined,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '', ''),
        ))
            .toEqual({
                ...state,
            });
    });
});
