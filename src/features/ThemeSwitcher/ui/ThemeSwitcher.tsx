import React, { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { ThemeSwitcher as ThemeSwitcherDeprecated } from './deprecated/ThemeSwitcher';
import { ThemeSwitcher as ThemeSwitcherRedesigned } from './redesigned/ThemeSwitcher';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <ThemeSwitcherRedesigned
                    className={className}
                    onToggleHandler={onToggleHandler}
                />
            )}
            off={(
                <ThemeSwitcherDeprecated
                    className={className}
                    onToggleHandler={onToggleHandler}
                    invertedColor={invertedColor}
                />
            )}
        />
    );
});
