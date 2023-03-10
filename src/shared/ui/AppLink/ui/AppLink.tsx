import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo(({
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(styles.appLink, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));
