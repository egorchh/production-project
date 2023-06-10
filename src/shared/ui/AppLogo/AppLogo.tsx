import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import AliensLogo from '../../assets/icons/logo.svg';
import styles from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(styles.appLogo, {}, [className])}
            justify="center"
            fullWidth
        >
            <div className={styles.gradient_big} />
            <div className={styles.gradient_small} />
            <AliensLogo className={styles.logo} />
        </HStack>
    );
});
