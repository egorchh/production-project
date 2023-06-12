import React, { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ThemeIcon from '@/shared/assets/icons/theme-redesigned.svg';

interface ThemeSwitcherProps {
    className?: string;
    onToggleHandler: VoidFunction;
}

export const ThemeSwitcher = memo(({ className, onToggleHandler }: ThemeSwitcherProps) => (
    <Icon className={className} Svg={ThemeIcon} clickable size={20} onClick={onToggleHandler} />
));
