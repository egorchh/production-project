import { classNames } from 'shared/lib/classNames/classNames';
import './AppLoader.scss';
import { memo } from 'react';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = memo(({ className }: AppLoaderProps) => (
    <section className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </section>
));
