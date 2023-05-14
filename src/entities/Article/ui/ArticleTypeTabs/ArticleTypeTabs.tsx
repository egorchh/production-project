import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType,
    onTabClick: (tab: TabItem) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onTabClick } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: 'All',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.ECOLOGY,
            content: 'Ecology',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'Economics',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'Science',
        },
    ], []);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
