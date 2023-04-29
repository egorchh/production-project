import type { StateSchema } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import { ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};

export type {
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
