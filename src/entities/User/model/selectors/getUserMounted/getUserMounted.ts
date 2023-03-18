import { StateSchema } from 'app/providers/StoreProvider';

export const getUserMounted = (state: StateSchema) => state.user._mounted;
