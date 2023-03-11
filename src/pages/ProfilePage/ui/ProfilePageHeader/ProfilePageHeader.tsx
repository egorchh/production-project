import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly,
    updateProfileData,
    profileActions,
} from 'features/EditableProfileCard';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveData = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.profilePageHeader, {}, [className])}>
            <Text className={styles.title} title={t('Заголовок профиля')} />
            {readonly
                ? (
                    <AppButton
                        theme={AppButtonTheme.OUTLINE}
                        onClick={onEdit}
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
                        >
                            {t('SaveEditing')}
                        </AppButton>
                        <AppButton
                            className={styles.button}
                            theme={AppButtonTheme.BACKGROUND_CANCEL}
                            onClick={onCancelEdit}
                        >
                            {t('CancelEditing')}
                        </AppButton>
                    </div>
                )}
        </div>
    );
};
