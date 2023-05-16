import React, { memo } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButtonSize } from '@/shared/ui/AppButton/ui/AppButton';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
    invertedColor?: boolean;
}

export const ThemeSwitcher = memo(({ className, invertedColor }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.M}
            onClick={toggleTheme}
        >
            <Icon Svg={ThemeIcon} invertedColor={invertedColor} />
        </AppButton>
    );
});
