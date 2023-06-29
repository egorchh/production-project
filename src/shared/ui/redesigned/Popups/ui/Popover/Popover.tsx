import React, { memo, ReactNode } from 'react';
import { Popover as PopoverComponent } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import commonStyles from '../../styles/popups.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    dropdownDirection?: DropdownDirection;
    children: ReactNode;
    unmount?: boolean;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        dropdownDirection = 'left',
        children,
        unmount,
    } = props;

    const itemsClasses = [
        mapDirectionClass[dropdownDirection],
        commonStyles.menu,
    ];

    return (
        <PopoverComponent
            className={classNames(commonStyles.popup, {}, [className])}
        >
            <PopoverComponent.Button as="div">
                {trigger}
            </PopoverComponent.Button>

            <PopoverComponent.Panel unmount={unmount} className={classNames(styles.panel, {}, itemsClasses)}>
                {children}
            </PopoverComponent.Panel>
        </PopoverComponent>
    );
});
