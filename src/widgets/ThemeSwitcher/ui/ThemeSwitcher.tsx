import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.M}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
        </AppButton>
    );
}
