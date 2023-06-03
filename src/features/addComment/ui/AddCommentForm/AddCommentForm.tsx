import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/Icon';
import SendCommentSVG from '@/shared/assets/icons/send-comment.svg';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
import {
    getAddCommentText,
    getAddCommentError,
} from '../../model/selectors/addCommentSelectors';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
    addComment: addCommentReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('comments');
    const text = useSelector(getAddCommentText);
    const error = useSelector(getAddCommentError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
                className={classNames(styles.addCommentForm, {}, [className])}
                data-testid="AddCommentForm"
            >
                <Input
                    className={styles.input}
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                    data-testid="AddCommentForm.Input"
                />
                <AppButton
                    className={styles.button}
                    theme={AppButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                    data-testid="AddCommentForm.SubmitButton"
                >
                    <Icon className={styles.icon} Svg={SendCommentSVG} />
                </AppButton>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
