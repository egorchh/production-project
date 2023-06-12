import {
    ButtonHTMLAttributes, memo,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './AppButton.module.scss';

export type ButtonTheme = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const AppButton = memo<AppButtonProps>((
    {
        className,
        variant = 'outline',
        children,
        square,
        size = 'm',
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
                    [className, styles[variant], [styles[size]]],
                )
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
