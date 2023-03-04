import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const getLoginState = (state: StateSchema) => state?.loginForm || initialState;
