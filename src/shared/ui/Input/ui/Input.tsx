import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <input
            readOnly={readonly}
            className={classNames(styles.input, mods, [className])}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});
