import {
    ButtonHTMLAttributes, memo,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_CANCEL = 'background-cancel',
    BACKGROUND_SUCCESS = 'background-success',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum AppButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const AppButton = memo<AppButtonProps>((
    {
        className,
        theme = AppButtonTheme.CLEAR,
        children,
        square,
        size = AppButtonSize.L,
        disabled,
        fullWidth,
        ...otherProps
    }: AppButtonProps,
) => {
    const mods: Mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={
                classNames(
                    styles.appButton,
                    mods,
                    [className, styles[theme], [styles[size]]],
                )
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
