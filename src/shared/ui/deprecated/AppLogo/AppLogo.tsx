import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import AliensLogo from '../../../assets/icons/logo.svg';
import { Icon } from '../Icon';
import styles from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
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
            <Icon
                className={styles.logo}
                Svg={AliensLogo}
                width="60"
                height="60"
            />
        </HStack>
    );
});
