import { ValidateProfileError } from '../../consts/consts';
import { Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        lastname, first, username, age,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!lastname || !first) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!username || username?.length < 4) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    return errors;
};
