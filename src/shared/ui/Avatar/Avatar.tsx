import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt = 'User avatar',
    } = props;

    const computedStyles = useMemo(() => ({
        width: size || 70,
        height: size || 70,
    }), [size]);

    return (
        <img
            className={classNames(styles.avatar, {}, [className])}
            alt={alt}
            style={computedStyles}
            src={src || 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'}
        />
    );
};
