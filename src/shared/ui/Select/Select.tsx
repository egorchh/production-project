import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, useMemo,
} from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((item) => (
        <option
            key={item.value}
            value={item.value}
            className={styles.option}
        >
            {item.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <section className={classNames(styles.selectWrapper, {}, [className])}>
            {label && (
                <label className={styles.label} htmlFor="select">
                    {label}
                </label>
            )}
            <select
                disabled={readonly}
                value={value}
                className={styles.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </section>
    );
};
