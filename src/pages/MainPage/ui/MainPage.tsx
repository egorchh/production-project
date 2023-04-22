import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

function MainPage() {
    const { t } = useTranslation('main');

    const people = [
        { id: 1, value: 'Durward Reynolds', unavailable: false },
        { id: 2, value: 'Kenton Towne', unavailable: false },
        { id: 3, value: 'Therese Wunsch', unavailable: false },
        { id: 4, value: 'Benedict Kessler', unavailable: true },
        { id: 5, value: 'Katelyn Rohan', unavailable: false },
    ];

    return (
        <Page>
            {t('Главная страница')}
            {t('Главная страница')}
            {t('Главная страница')}
            {t('Главная страница')}
            <VStack>
                {t('Главная страница')}
                <ListBox
                    value={undefined}
                    defaultValue={t('Выберите значение')}
                    options={people}
                    onChange={() => {}}
                />
                {t('Главная страница')}
            </VStack>
            {t('Главная страница')}
            {t('Главная страница')}
            {t('Главная страница')}
        </Page>
    );
}

export default MainPage;
