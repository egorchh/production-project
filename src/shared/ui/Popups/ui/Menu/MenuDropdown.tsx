import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { AppButton } from '../../../AppButton/ui/AppButton';
import { AppLink } from '../../../AppLink/ui/AppLink';
import styles from './MenuDropdown.module.scss';
import commonStyles from '../../styles/popups.module.scss';

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
        <Menu as="div" className={classNames(commonStyles.popup, {}, [className])}>
            <Menu.Button as="div" className={styles.buttonWrapper}>
                <AppButton className={styles.button}>
                    {trigger}
                </AppButton>
            </Menu.Button>
            <Menu.Items className={classNames(styles.items, {}, itemsClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames(styles.item, { [commonStyles.active]: active })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={AppLink} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={index} as={Fragment}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
