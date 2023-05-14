import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country/model/types/country';
import { ValidateProfileError } from '../consts/consts';

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    editedData?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
