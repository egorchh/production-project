import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import { AppButtonSize } from '@/shared/ui/AppButton/ui/AppButton';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('loginForm');
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmitHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result?.meta.requestStatus) {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.loginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t('Неверные данные')} theme={TextTheme.ERROR} />}
                <Input
                    className={styles.input}
                    autoFocus
                    onChange={onChangeUsername}
                    type="text"
                    placeholder={t('Логин')}
                    value={username}
                />
                <Input
                    className={styles.input}
                    onChange={onChangePassword}
                    type="password"
                    placeholder={t('Пароль')}
                    value={password}
                />
                <AppButton
                    theme={AppButtonTheme.BACKGROUND_INVERTED}
                    size={AppButtonSize.XL}
                    onClick={onSubmitHandler}
                    disabled={isLoading}
                >
                    {t('Войти', { ns: 'translation' })}
                </AppButton>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
