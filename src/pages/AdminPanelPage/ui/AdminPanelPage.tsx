import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {t('Admin panel')}
        </Page>
    );
}

export default AboutPage;
