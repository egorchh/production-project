import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function ForbiddenPage() {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
}

export default ForbiddenPage;
