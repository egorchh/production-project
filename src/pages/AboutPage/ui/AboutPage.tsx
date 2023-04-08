import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
}

export default AboutPage;
