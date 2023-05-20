import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import {
    profileActions,
} from '../../model/slice/profileSlice';
import {
    getProfileReadonly,
    getProfileData,
} from '../../model/selectors';
import {
    updateProfileData,
} from '../../model/services/updateProfileData/updateProfileData';
import styles from './EditableProfileCardHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdipProfile = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveData = useCallback(() => {
        if (__PROJECT__ !== 'storybook' && profileData?.id) {
            dispatch(updateProfileData(profileData.id));
        }
    }, [dispatch, profileData]);

    return (
        <div className={classNames(styles.profilePageHeader, {}, [className])}>
            <Text className={styles.title} title={t('Заголовок профиля')} />
            {canEdipProfile && (
                <div>
                    {readonly
                        ? (
                            <AppButton
                                theme={AppButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('EditProfile')}
                            </AppButton>
                        )
                        : (
                            <div className={styles.buttons}>
                                <AppButton
                                    className={styles.button}
                                    theme={AppButtonTheme.BACKGROUND_SUCCESS}
                                    onClick={onSaveData}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('SaveEditing')}
                                </AppButton>
                                <AppButton
                                    className={styles.button}
                                    theme={AppButtonTheme.BACKGROUND_CANCEL}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('CancelEditing')}
                                </AppButton>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
};
