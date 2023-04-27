import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { AppLoader } from 'shared/ui/AppLoader/ui/AppLoader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { VStack } from 'shared/ui/Stack';
import { Profile } from '../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    loading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    loading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (loading) {
        return (
            <div
                className={classNames(styles.profileCard, {}, [className, styles.loading])}
            >
                <AppLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(styles.profileCard, {}, [className, styles.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('ErrorTitle')}
                    text={t('ErrorDescription')}
                />
            </div>
        );
    }

    return (
        <VStack>
            <VStack gap="16" align="start" className={styles.content}>
                <VStack fullWidth align="center">
                    {
                        data?.avatar
                        && (<Avatar size={70} src={data.avatar} />)
                    }
                    {
                        data?.username
                        && (<Text className={styles.username} title={data.username} />)
                    }
                </VStack>
                <Input
                    readonly={readonly}
                    className={styles.input}
                    value={data?.username}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    data-testid="ProfileCard.Username"
                />
                <Input
                    readonly={readonly}
                    className={styles.input}
                    value={data?.first}
                    placeholder={t('Name')}
                    onChange={onChangeFirstname}
                />
                <Input
                    readonly={readonly}
                    className={styles.input}
                    value={data?.lastname}
                    placeholder={t('SecondName')}
                    onChange={onChangeLastname}
                />
                <Input
                    type="number"
                    readonly={readonly}
                    className={styles.input}
                    value={data?.age}
                    placeholder={t('Age')}
                    onChange={onChangeAge}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={styles.countrySelect}
                />
                <Input
                    readonly={readonly}
                    className={styles.input}
                    value={data?.city}
                    placeholder={t('City')}
                    onChange={onChangeCity}
                />
                <Input
                    readonly={readonly}
                    className={styles.input}
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
            </VStack>
        </VStack>
    );
};
