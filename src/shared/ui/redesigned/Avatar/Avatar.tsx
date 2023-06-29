import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../common/AppImage';
import { Skeleton } from '../../redesigned/Skeleton/Skeleton';
import { Icon } from '../Icon/Icon';
import UserAvatarSVG from '../../../assets/icons/avatar.svg';
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
        size = 70,
        alt = 'User avatar',
    } = props;

    const computedStyles = useMemo(() => ({
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
    }), [size]);

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
            errorFallback={<Icon Svg={UserAvatarSVG} size={size} />}
            className={classNames(styles.avatar, {}, [className])}
            alt={alt}
            style={computedStyles}
            src={src || 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'}
        />
    );
};
