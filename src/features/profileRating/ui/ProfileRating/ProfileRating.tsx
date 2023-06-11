import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { useProfileRating, useRateProfile } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutation] = useRateProfile();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.error(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={200} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте комментарий о пользователе')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            hasFeedback
        />
    );
});

export default ProfileRating;
