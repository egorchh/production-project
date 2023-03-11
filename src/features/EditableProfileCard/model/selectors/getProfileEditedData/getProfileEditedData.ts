import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileEditedData = (state: StateSchema) => state?.profile?.editedData;
