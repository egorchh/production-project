import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleListView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addComment';
import { Page } from 'widgets/Page/Page';
import {
    articleDetailsPageReducer,
} from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/recommendations/recommendations';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import styles from './ArticleDetailsPage.module.scss';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(styles.articleDetails, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id || '1'} />
                <Text
                    className={styles.recommendationsTitle}
                    align={TextAlign.LEFT}
                    title={`${t('Рекомендуем')}:`}
                />
                <ArticleList
                    target="_blank"
                    className={styles.recommendations}
                    isLoading={recommendationsIsLoading}
                    articles={recommendations}
                    view={ArticleListView.PLATE}
                />
                <Text
                    className={styles.commentsTitle}
                    align={TextAlign.LEFT}
                    title={`${t('Комментарии')}:`}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments.reverse()}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
