import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useMemo,
} from 'react';
import styles from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.selectWrapper, {}, [className])}>
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
        </div>
    );
});
