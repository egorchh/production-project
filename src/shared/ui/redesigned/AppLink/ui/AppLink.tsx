import { LinkProps, NavLink } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink = memo(({
    className,
    to,
    variant = 'primary',
    children,
    activeClassName = '',
    ...otherProps
}: AppLinkProps) => (
    <NavLink
        to={to}
        className={({ isActive }) => classNames(styles.appLink, { [activeClassName]: isActive }, [className, styles[variant]])}
        {...otherProps}
    >
        {children}
    </NavLink>
));
