import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 21,
    currency: Currency.USD,
    country: Country.KAZAKHSTAN,
    city: 'SPB',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            editedData: profile,
        },
        user: {
            authData: { id: '1', username: 'admin123' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    beforeEach(() => componentRender(<EditableProfileCard id="1" />, options));

    test('cancel button appear on page after start editing', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('save profile edits', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Username'));

        await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'egorch');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        setTimeout(() => expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('egorch'), 300);
    });

    test('cancel profile edits', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Username'));

        await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'egorch');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('admin123');
    });

    test('appear validation error', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Username'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.ErrorText')).toBeInTheDocument();
    });

    test('expect put request if there are not validation errors', async () => {
        const mockRequest = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'user123');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockRequest).toHaveBeenCalled();
    });
});
