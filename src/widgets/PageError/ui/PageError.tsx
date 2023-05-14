import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <section className={classNames(styles.pageError, {}, [className])}>
            <p>{t('Ошибка')}</p>
            <AppButton
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </AppButton>
        </section>
    );
};
