export {
    ArticleDetailsPageSchema,
} from './model/types';

export {
    ArticleDetailsPageLazy as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';

export {
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsError,
} from './model/selectors/comments/comments';
