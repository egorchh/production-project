import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme, AppButtonSize } from '@/shared/ui/deprecated/AppButton';
import { Icon } from '@/shared/ui/deprecated/Icon';
import Language from '@/shared/assets/icons/language.svg';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.M}
            onClick={toggleLanguage}
        >
            <Icon Svg={Language} className={styles.icon} />
        </AppButton>
    );
});
