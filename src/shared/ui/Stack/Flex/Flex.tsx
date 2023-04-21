import { classNames } from 'shared/lib/classNames/classNames';
import { ComponentProps, ElementType, ReactNode } from 'react';
import styles from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap = '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
export type FlexSpaceTop = '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
// eslint-disable-next-line max-len
export type FlexSpaceBottom = '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
export type FlexSpaceRight = '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
export type FlexSpaceLeft = '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
type TagsVariants = 'div' | 'section';

export interface FlexOwnProps<E extends ElementType = ElementType> {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    tag?: TagsVariants;
    fullHeight?: boolean;
    fullWidth?: boolean;
}

export type FlexProps<E extends ElementType> = FlexOwnProps<E>
    & Omit<ComponentProps<E>, keyof FlexOwnProps<E>>;

const justifyClasses = {
    start: styles.justifyStart,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
    center: styles.justifyCenter,
};

const alignClasses = {
    start: styles.alignStart,
    end: styles.alignEnd,
    center: styles.alignCenter,
};

const directionClasses = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const wrapClasses = {
    wrap: styles.wrap,
    nowrap: styles.nowrap,
};

const gapClasses = {
    2: styles.gap2,
    4: styles.gap4,
    6: styles.gap6,
    8: styles.gap8,
    12: styles.gap12,
    16: styles.gap16,
    20: styles.gap20,
    26: styles.gap26,
    28: styles.gap28,
    30: styles.gap30,
    40: styles.gap40,
};

export const Flex = <E extends ElementType = TagsVariants,
    T extends TagsVariants = E extends TagsVariants? E : never>(props: FlexProps<T>) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        wrap = 'nowrap',
        tag,
        fullHeight,
        fullWidth,
    } = props;

    const Tag = tag || 'div';

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        wrapClasses[wrap],
    ];

    const mods = {
        [styles.fullHeight]: fullHeight,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <Tag className={classNames(styles.flex, mods, classes)}>
            {children}
        </Tag>
    );
};
