import { Currency } from '../../../Currency/model/types/currency';
import { Country } from '../../../Country/model/types/country';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}
