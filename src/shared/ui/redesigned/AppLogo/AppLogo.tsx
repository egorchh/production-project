import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../common/Stack';
import AliensLogo from '../../../assets/icons/logo.svg';
import styles from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 60 }: AppLogoProps) => (
    <HStack
        className={classNames(styles.appLogo, {}, [className])}
        justify="center"
        fullWidth
    >
        <div className={styles.gradient_big} />
        <div className={styles.gradient_small} />
        <AliensLogo
            width={size}
            height={size}
            color="black"
        />
    </HStack>
));
