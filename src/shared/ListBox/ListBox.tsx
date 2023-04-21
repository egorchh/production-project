import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import styles from './ListBox.module.scss';

type ListBoxOption = {
    value: string,
    content?: ReactNode;
    unavailable?: boolean,
}

type DropdownDirection = 'top' | 'bottom' | 'right' | 'left';

type ListBoxProps = {
    className?: string;
    options: ListBoxOption[];
    value?: string;
    defaultValue?: string
    label?: string,
    readonly?: boolean,
    dropdownDirection?: DropdownDirection,
    fullWidth?: boolean;
    onChange: <T extends string>(value: T) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: styles.dropdownTop,
    bottom: styles.dropdownBottom,
    right: styles.dropdownRight,
    left: styles.dropdownLeft,
};

export function ListBox(props: ListBoxProps) {
    const {
        options,
        className,
        value,
        defaultValue,
        label,
        readonly,
        dropdownDirection = 'bottom',
        fullWidth,
        onChange,
    } = props;

    const optionsClasses = [
        mapDirectionClass[dropdownDirection],
    ];

    return (
        <VStack gap="6" align="start" fullWidth={fullWidth}>
            {label && <Text text={label} />}
            <Listbox
                as="div"
                className={classNames(styles.listBox, {}, [className])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <Listbox.Button
                    className={styles.trigger}
                    disabled={readonly}
                >
                    <AppButton
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </AppButton>
                </Listbox.Button>
                <Listbox.Options as="ul" className={classNames(styles.options, {}, optionsClasses)}>
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.value}
                            value={option.value}
                            disabled={option.unavailable}
                            as={Fragment}
                        >
                            {({ active }) => (
                                <li
                                    className={classNames(styles.item, {
                                        [styles.activeItem]: active,
                                        [styles.disabled]: option.unavailable,
                                    })}
                                >
                                    {option.value}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </VStack>
    );
}
