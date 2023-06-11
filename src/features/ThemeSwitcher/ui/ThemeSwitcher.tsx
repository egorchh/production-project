import React, { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { AppButton, AppButtonTheme, AppButtonSize } from '@/shared/ui/deprecated/AppButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
    invertedColor?: boolean;
}

export const ThemeSwitcher = memo(({ className, invertedColor }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((theme) => {
            dispatch(saveJsonSettings({
                theme,
            }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.M}
            onClick={onToggleHandler}
        >
            <Icon Svg={ThemeIcon} invertedColor={invertedColor} />
        </AppButton>
    );
});
