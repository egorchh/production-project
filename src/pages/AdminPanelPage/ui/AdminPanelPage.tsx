import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AdminPanelPage() {
    const { t } = useTranslation('adminPanel');

    return (
        <Page data-testid="AdminPanelPage">
            {t('Admin panel')}
        </Page>
    );
}

export default AdminPanelPage;
