import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    loginForm?: LoginSchema;
}
