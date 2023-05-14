import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import PlateIcon from '@/shared/assets/icons/plate-view.svg';
import ListIcon from '@/shared/assets/icons/list-view.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleListView } from '@/entities/Article';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import { AppButtonSize } from '@/shared/ui/AppButton/ui/AppButton';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleListView;
    onViewClick?: (view: ArticleListView) => void;
}

const viewTypes = [
    {
        view: ArticleListView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleListView.PLATE,
        icon: PlateIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    const onClick = (newView: ArticleListView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(styles.articleViewSelector, {}, [className])}>
            {
                viewTypes.map((type) => (
                    <AppButton
                        key={type.view}
                        size={AppButtonSize.M}
                        theme={AppButtonTheme.CLEAR}
                        onClick={onClick(type.view)}
                    >
                        <Icon
                            className={classNames(
                                styles.icon,
                                { [styles.selectedIcon]: type.view === view },
                            )}
                            Svg={type.icon}
                        />
                    </AppButton>
                ))
            }
        </div>
    );
});
