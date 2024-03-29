import { memo, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { AppLoader } from '@/shared/ui/deprecated/AppLoader';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (

        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}

        >
            <Suspense fallback={<AppLoader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>

    );
});
