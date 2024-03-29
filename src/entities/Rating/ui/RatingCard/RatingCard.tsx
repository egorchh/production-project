import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { AppButton, AppButtonTheme } from '@/shared/ui/deprecated/AppButton';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { BottomSheet } from '@/shared/ui/deprecated/BottomSheet';

interface RatingCardProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                placeholder={t('Ваш отзыв')}
                fullWidth
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={className} data-testid="RatingCard">
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating selectedStars={starsCount} size={24} onSelect={onSelectStars} />
            </VStack>
            {isMobile ? (
                <BottomSheet isOpen={isModalOpen}>
                    <VStack fullWidth gap="20">
                        {modalContent}
                        <AppButton
                            theme={AppButtonTheme.BACKGROUND_SUCCESS}
                            fullWidth
                            onClick={cancelHandle}
                        >
                            {t('Отправить')}
                        </AppButton>
                    </VStack>
                </BottomSheet>
            ) : (
                <Modal withoutCloseButton isOpen={isModalOpen}>
                    <VStack fullWidth gap="26">
                        {modalContent}
                        <HStack fullWidth justify="end" gap="16">
                            <AppButton
                                data-testid="RatingCard.Close"
                                theme={AppButtonTheme.BACKGROUND_CANCEL}
                                onClick={cancelHandle}
                            >
                                {t('Закрыть')}
                            </AppButton>
                            <AppButton
                                data-testid="RatingCard.Send"
                                theme={AppButtonTheme.BACKGROUND_SUCCESS}
                                onClick={acceptHandle}
                            >
                                {t('Отправить')}
                            </AppButton>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
