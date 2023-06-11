import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT= 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    dataTestId?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M,
        dataTestId,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag data-testid={dataTestId} className={cls.title}>{title}</HeaderTag>}
            {text && <p data-testid={dataTestId} className={cls.text}>{text}</p>}
        </div>
    );
});
