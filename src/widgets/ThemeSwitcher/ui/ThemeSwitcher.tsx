import { useTheme } from 'app/providers/ThemeProvider';
import React, { memo } from 'react';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.M}
            onClick={toggleTheme}
        >
            <ThemeIcon className={styles.icon} />
        </AppButton>
    );
});
