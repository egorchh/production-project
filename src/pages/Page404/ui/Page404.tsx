import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import styles from './Page404.module.scss';

interface Page404Props {
    className?: string;
}

export const Page404 = ({ className }: Page404Props) => {
    const { t } = useTranslation('404');

    return (
        <Page className={classNames(styles.page404, {}, [className])}>
            <div className={styles.container}>
                <h1>
                    {t('Страница не найдена')}
                </h1>
                <h3>
                    {t('URL')}
                </h3>
            </div>
        </Page>
    );
};
