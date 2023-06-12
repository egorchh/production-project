import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { LangSwitcher as LangSwitcherRedesigned } from './redesigned/LangSwitcher';
import { LangSwitcher as LangSwitcherDeprecated } from './deprecated/LangSwitcher';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <LangSwitcherRedesigned
                    className={className}
                    language={i18n.language}
                    toggleLanguage={toggleLanguage}
                />
            )}
            off={(
                <LangSwitcherDeprecated
                    className={className}
                    toggleLanguage={toggleLanguage}
                />
            )}
        />
    );
});
