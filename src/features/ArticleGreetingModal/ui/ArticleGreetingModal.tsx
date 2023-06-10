import {
    memo, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';

export const ArticleGreetingModal = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { wasArticlePageOpen } = useJsonSettings();

    useEffect(() => {
        if (!wasArticlePageOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ wasArticlePageOpen: true }));
        }
    }, [dispatch, wasArticlePageOpen]);

    const onClose = () => setIsOpen(false);

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            <Text
                title={t('Добро пожаловать на страницу статей')}
                text={t('Тут вы можете прочитать самые свежие новости')}
            />
        </Modal>
    );
});
