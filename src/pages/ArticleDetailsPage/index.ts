export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';

export {
    ArticleDetailsPageLazy as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';

export {
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsError,
} from './model/selectors/comments';
