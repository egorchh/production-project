import { ComponentProps, ElementType, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Flex.module.scss';

export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexAlign = 'center' | 'start' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexSpaceVariants =
    '2' | '4' | '6' | '8' | '12' | '16' | '20' | '26' | '28' | '30' | '40';
type TagsVariants = 'div' | 'section';

export interface FlexOwnProps<E extends ElementType = ElementType> {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexSpaceVariants;
    spaceTop?: FlexSpaceVariants;
    spaceBottom?: FlexSpaceVariants;
    spaceRight?: FlexSpaceVariants;
    spaceLeft?: FlexSpaceVariants;
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

const spaceTopClasses = {
    2: styles.spaceTop2,
    4: styles.spaceTop4,
    6: styles.spaceTop6,
    8: styles.spaceTop8,
    12: styles.spaceTop12,
    16: styles.spaceTop16,
    20: styles.spaceTop20,
    26: styles.spaceTop26,
    28: styles.spaceTop28,
    30: styles.spaceTop30,
    40: styles.spaceTop40,
};

const spaceBottomClasses = {
    2: styles.spaceBottom2,
    4: styles.spaceBottom4,
    6: styles.spaceBottom6,
    8: styles.spaceBottom8,
    12: styles.spaceBottom12,
    16: styles.spaceBottom16,
    20: styles.spaceBottom20,
    26: styles.spaceBottom26,
    28: styles.spaceBottom28,
    30: styles.spaceBottom30,
    40: styles.spaceBottom40,
};

const spaceRightClasses = {
    2: styles.spaceRight2,
    4: styles.spaceRight4,
    6: styles.spaceRight6,
    8: styles.spaceRight8,
    12: styles.spaceRight12,
    16: styles.spaceRight16,
    20: styles.spaceRight20,
    26: styles.spaceRight26,
    28: styles.spaceRight28,
    30: styles.spaceRight30,
    40: styles.spaceRight40,
};

const spaceLeftClasses = {
    2: styles.spaceLeft2,
    4: styles.spaceLeftLeft4,
    6: styles.spaceLeft6,
    8: styles.spaceLeft8,
    12: styles.spaceLeft12,
    16: styles.spaceLeft16,
    20: styles.spaceLeft20,
    26: styles.spaceLeftLeft26,
    28: styles.spaceLeft28,
    30: styles.spaceLeft30,
    40: styles.spaceLeft40,
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
        spaceTop,
        spaceBottom,
        spaceLeft,
        spaceRight,
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
        spaceTop && spaceTopClasses[spaceTop],
        spaceBottom && spaceBottomClasses[spaceBottom],
        spaceTop && spaceTopClasses[spaceTop],
        spaceTop && spaceTopClasses[spaceTop],
        spaceLeft && spaceLeftClasses[spaceLeft],
        spaceRight && spaceRightClasses[spaceRight],
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
