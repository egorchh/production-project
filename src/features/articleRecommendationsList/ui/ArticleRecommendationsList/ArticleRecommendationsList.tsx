import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleList, ArticleListView } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);
    const { t } = useTranslation();

    if (error || !articles) {
        return (
            <Text text={t('Призошла ошибка при загрузке рекомендаций')} />
        );
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                align={TextAlign.LEFT}
                title={`${t('Рекомендуем')}:`}
            />
            <ArticleList
                target="_blank"
                articles={articles}
                isLoading={isLoading}
                view={ArticleListView.PLATE}
            />
        </VStack>
    );
});
