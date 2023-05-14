import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileLoading = (state: StateSchema) => state?.profile?.isLoading || false;
