import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            options={options}
            value={value}
            defaultValue={t('Укажите страну')}
            readonly={readonly}
            dropdownDirection="top"
            fullWidth
            onChange={onChangeHandler}
        />
    );
});
