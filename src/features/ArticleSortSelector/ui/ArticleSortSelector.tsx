import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newOrder: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('по дате'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('по заголовоку'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('по просмотрам'),
        },
    ], [t]);

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('прямой'),
        },
        {
            value: 'desc',
            content: t('обратный'),
        },
    ], [t]);

    return (
        <div className={classNames(styles.articleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Сортировка')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('Порядок')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
