import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import {
    ArticleDetailsComments,
} from '../ArticleDetailsComments/ArticleDetailsComments';
import {
    articleDetailsPageReducer,
} from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(styles.articleDetails, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    if (!id) {
        return null;
    }

    const articleRating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating className={styles.articleRating} articleId={id} />,
        off: () => null,
    });

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id || '1'} />
                <ArticleRecommendationsList />
                {articleRating}
                <Text
                    className={styles.commentsTitle}
                    align={TextAlign.LEFT}
                    title={`${t('Комментарии')}:`}
                />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
