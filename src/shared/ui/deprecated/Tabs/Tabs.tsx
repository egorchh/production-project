import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import styles from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}
interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onClick: (tab: TabItem) => void;
}

/**
 * Компонент устарел, используйте компоненты из директории redesigned
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onClick(tab);
    }, [onClick]);

    return (
        <ul className={classNames(styles.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={styles.tabWrapper}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    onClick={clickHandle(tab)}
                    data-testid={`ArticleTypeTab.${tab.content}`}
                >
                    {tab.content}
                </Card>
            ))}
        </ul>
    );
});
