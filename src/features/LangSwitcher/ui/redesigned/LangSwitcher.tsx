import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton } from '@/shared/ui/redesigned/AppButton';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    language: string;
    toggleLanguage: VoidFunction;
}

export const LangSwitcher = memo(({ className, language, toggleLanguage }: LangSwitcherProps) => (
    <AppButton
        className={classNames(styles.button, {}, [className])}
        variant="clear"
        size="m"
        onClick={toggleLanguage}
    >
        {language.toUpperCase()}
    </AppButton>
));
