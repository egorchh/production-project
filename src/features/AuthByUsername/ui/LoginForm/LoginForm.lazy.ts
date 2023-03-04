import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = React.lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
