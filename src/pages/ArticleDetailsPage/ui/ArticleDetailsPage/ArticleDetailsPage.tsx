import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
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
import { AppButton } from 'shared/ui';
import { Page } from 'widgets/Page/Page';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import styles from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/comments';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onGoBackToArticles = useCallback(() => {
        window.history.back();
    }, []);

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
                <AppButton onClick={onGoBackToArticles}>
                    {t('Назад')}
                </AppButton>
                <ArticleDetails id={id || '1'} />
                <Text
                    className={styles.commentsTitle}
                    align={TextAlign.LEFT}
                    title={`${t('Комментарии')}:`}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments.reverse()}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
