import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export type TextVariant = 'normal' | 'error' | 'accent';

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    dataTestId?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        dataTestId,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(styles.Text, {}, [className, styles[variant], styles[align], styles[size]])}>
            {title && <HeaderTag data-testid={dataTestId} className={styles.title}>{title}</HeaderTag>}
            {text && <p data-testid={dataTestId} className={styles.text}>{text}</p>}
        </div>
    );
});
