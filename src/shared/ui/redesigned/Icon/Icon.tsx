import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: number;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: VoidFunction;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        size = 24,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            width={size}
            height={size}
            className={
                classNames(styles.icon, {}, [className])
            }
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={styles.button}
                type="button"
                style={{ height: size, width: size }}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
