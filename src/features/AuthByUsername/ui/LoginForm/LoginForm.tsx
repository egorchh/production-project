import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { Input } from 'shared/ui/Input/ui/Input';
import { useState } from 'react';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onChangeUsernameValue = (value: string) => {
        setNameValue(value);
    };

    const onChangePasswordValue = (value: string) => {
        setPasswordValue(value);
    };

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input
                className={styles.input}
                autoFocus
                value={nameValue}
                onChange={onChangeUsernameValue}
                type="text"
                placeholder={t('Login')}
            />
            <Input
                className={styles.input}
                value={passwordValue}
                onChange={onChangePasswordValue}
                type="password"
                placeholder={t('Password')}
            />
            <AppButton theme={AppButtonTheme.BACKGROUND_INVERTED} size={AppButtonSize.L}>
                {t('Войти')}
            </AppButton>
        </div>
    );
};
