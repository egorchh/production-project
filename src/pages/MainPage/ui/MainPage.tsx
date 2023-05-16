import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating/ui/RatingCard/RatingCard';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard title={t('Вам понравилась статья?')} feedbackTitle={t('Оставьте отзыв')} />
        </Page>
    );
}

export default MainPage;
