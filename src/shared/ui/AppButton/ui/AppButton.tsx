import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
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
}

export const AppButton: FC<AppButtonProps> = ({
    className, theme, children, square, size, disabled, ...otherProps
}: AppButtonProps) => {
    const mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
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
};
