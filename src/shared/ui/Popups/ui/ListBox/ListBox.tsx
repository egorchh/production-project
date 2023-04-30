import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '../../../../types/ui';
import { AppButton } from '../../../AppButton/ui/AppButton';
import { Text } from '../../../Text/Text';
import { VStack } from '../../../Stack/VStack/VStack';
import styles from './ListBox.module.scss';
import commonStyles from '../../styles/popups.module.scss';

type ListBoxOption = {
    value: string,
    content?: ReactNode;
    unavailable?: boolean,
}

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

export function ListBox(props: ListBoxProps) {
    const {
        options,
        className,
        value,
        defaultValue,
        label,
        readonly,
        dropdownDirection = 'bottom',
        fullWidth = true,
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
                className={classNames(commonStyles.popup, {}, [className, styles.listbox])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <Listbox.Button
                    className={commonStyles.trigger}
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
                                        [commonStyles.active]: active,
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
