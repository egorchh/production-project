import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { Input } from 'shared/ui/Input/ui/Input';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const loading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames('', {}, [className])}>
            <div className="">
                <Text title={t('Заголовок профиля')} />
                <AppButton theme={AppButtonTheme.OUTLINE}>
                    {t('Редактировать профить')}
                </AppButton>
            </div>
            <div className="">
                <Input
                    className=""
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    className=""
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    );
};
