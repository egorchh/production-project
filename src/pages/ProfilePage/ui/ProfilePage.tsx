import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileEditedData,
    getProfileError,
    getProfileLoading,
    profileActions,
    profileReducer, ValidateProfileError,
} from 'features/EditableProfileCard';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import { getProfileValidateErrors } from 'features/EditableProfileCard/model/selectors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const editedData = useSelector(getProfileEditedData);
    const loading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation('profile');
    const { id = '1' } = useParams<{id: string}>();

    const validateErrorsMapping = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.NO_DATA]: t('Ошибка загрузки данных'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное имя или фамилия'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Некорректный никнейм'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Некорректный возраст'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            first: value,
        }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value,
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value || 0),
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value,
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value,
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value,
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({
            country,
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames(styles.profilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text key={error} theme={TextTheme.ERROR} text={validateErrorsMapping[error]} />
                ))}
                <ProfileCard
                    data={editedData}
                    loading={loading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
