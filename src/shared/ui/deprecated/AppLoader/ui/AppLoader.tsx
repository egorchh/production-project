import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './AppLoader.scss';

interface AppLoaderProps {
    className?: string;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const AppLoader = memo(({ className }: AppLoaderProps) => (
    <section className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </section>
));
