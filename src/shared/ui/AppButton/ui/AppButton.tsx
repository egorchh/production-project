import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme
}

export const AppButton: FC<AppButtonProps> = ({
    className, theme = AppButtonTheme.CLEAR, children, ...otherProps
}: AppButtonProps) => (
    <button
        type="button"
        className={classNames(styles.appButton, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
