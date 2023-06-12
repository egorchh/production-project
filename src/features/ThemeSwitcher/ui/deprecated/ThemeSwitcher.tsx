import React, { memo } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { AppButton, AppButtonTheme, AppButtonSize } from '@/shared/ui/deprecated/AppButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ThemeSwitcherProps {
    className?: string;
    invertedColor?: boolean;
    onToggleHandler: VoidFunction;
}

export const ThemeSwitcher = memo(({ className, invertedColor, onToggleHandler }: ThemeSwitcherProps) => (
    <AppButton
        className={classNames('', {}, [className])}
        theme={AppButtonTheme.CLEAR}
        size={AppButtonSize.M}
        onClick={onToggleHandler}
    >
        <Icon Svg={ThemeIcon} invertedColor={invertedColor} />
    </AppButton>
));
