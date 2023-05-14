import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    invertedColor?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 24,
        height = 24,
        invertedColor,
    } = props;

    return (
        <Svg
            width={width}
            height={height}
            className={
                classNames(styles.icon, { [styles.invertedColorStyle]: invertedColor }, [className])
            }
        />
    );
});
