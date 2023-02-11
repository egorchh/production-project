import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </AppButton>
    );
}
