import { classNames } from 'shared/lib/classNames/classNames';
import './AppLoader.scss';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = ({ className }: AppLoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
