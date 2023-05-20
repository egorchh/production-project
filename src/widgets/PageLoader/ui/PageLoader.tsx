import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLoader } from '@/shared/ui/AppLoader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(styles.pageLoader, {}, [className])}>
        <AppLoader />
    </div>
);
