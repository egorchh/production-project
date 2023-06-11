import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyButtonIcon from '@/shared/assets/icons/file-copy.svg';
import { AppButton, AppButtonTheme } from '../AppButton';
import { Icon } from '../Icon/Icon';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.code, {}, [className])}>
            <AppButton className={styles.copyButton} theme={AppButtonTheme.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyButtonIcon} />
            </AppButton>
            <code>
                {text}
            </code>
        </pre>
    );
});
