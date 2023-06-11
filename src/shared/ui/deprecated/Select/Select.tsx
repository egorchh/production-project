import {
    ChangeEvent, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss';
import { typedMemo } from '@/shared/const/typedMemo';

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

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
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
            data-testid={`ArticleSortSelectorOption.${item.value}`}
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
                data-testid={`ArticleSortSelector.${label}`}
            >
                {optionsList}
            </select>
        </section>
    );
});
