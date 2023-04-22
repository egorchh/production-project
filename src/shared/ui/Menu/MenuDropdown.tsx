import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppButton } from '../AppButton/ui/AppButton';
import { AppLink } from '../AppLink/ui/AppLink';
import styles from './MenuDropdown.module.scss';

export type MenuDropdownItem = {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}

type MenuDropdownProps = {
    className?: string;
    items: MenuDropdownItem[];
    trigger: ReactNode;
    dropdownDirection?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: styles.dropdownTop,
    bottom: styles.dropdownBottom,
    right: styles.dropdownRight,
    left: styles.dropdownLeft,
};

export const MenuDropdown = (props: MenuDropdownProps) => {
    const {
        className,
        trigger,
        items,
        dropdownDirection = 'bottom',
    } = props;

    const itemsClasses = [
        mapDirectionClass[dropdownDirection],
    ];

    return (
        <Menu as="div" className={classNames(styles.menu, {}, [className])}>
            <Menu.Button className={styles.buttonWrapper}>
                <AppButton className={styles.button}>
                    {trigger}
                </AppButton>
            </Menu.Button>
            <Menu.Items className={classNames(styles.items, {}, itemsClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames(styles.item, { [styles.active]: active })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
