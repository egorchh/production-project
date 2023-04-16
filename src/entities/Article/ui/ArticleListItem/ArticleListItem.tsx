import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-line.svg';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppButton, AppButtonTheme, AppLink } from 'shared/ui';
import { AppRoutes } from 'shared/config/routerConfig/routerConfig';
import {
    ArticleBlockText,
    ArticleBlockType,
    Article, ArticleListView,
} from '../../model/types/article';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleListView
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
        target,
    } = props;

    if (view === ArticleListView.LIST) {
        const textBlock = article
            .blocks
            .find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText;

        return (
            <div
                className={classNames(styles.articlesWrapperList, {}, [className, styles[view]])}
            >
                <div className={styles.topSide}>
                    <div className={styles.header}>
                        {article.user
                            && (
                                <div className={styles.userInfo}>
                                    <Avatar size={30} src={article.user.avatar} />
                                    <Text text={article.user.username} />
                                </div>
                            )}
                        <Text text={article.createdAt} />
                    </div>
                    <Text title={article.title} align={TextAlign.LEFT} />
                    <Text
                        text={article.type.join(', ')}
                        className={styles.types}
                    />
                </div>
                <img className={styles.img} src={article.img} alt={article.title} />
                <div className={styles.textContent}>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} />
                    )}
                </div>
                <div className={styles.footer}>
                    <AppLink replace target={target} to={AppRoutes.ARTICLE_DETAILS + article.id}>
                        <AppButton theme={AppButtonTheme.OUTLINE}>
                            {t('Читать далее')}
                        </AppButton>
                    </AppLink>
                    <div className={styles.views}>
                        <Text className={styles.viewCount} text={`${article.views}`} />
                        <Icon className={styles.viewIcon} Svg={EyeIcon} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            replace
            className={classNames(styles.PLATE, {}, [className, styles[view]])}
            to={AppRoutes.ARTICLE_DETAILS + article.id}
        >
            <div className={styles.articlesWrapperPlate}>
                <img
                    src={article.img}
                    alt={article.title}
                    height={200}
                    width={200}
                />
                <div className={styles.datePlate}>
                    <p className={styles.date}>
                        {article.createdAt}
                    </p>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.topSide}>
                        <Text
                            text={`${article.type.join(', ').slice(0, 9)}...`}
                            className={styles.types}
                        />
                        <div className={styles.views}>
                            <Text className={styles.viewCount} text={`${article.views}`} />
                            <Icon className={styles.viewIcon} Svg={EyeIcon} />
                        </div>
                    </div>
                    <Text title={`${article.title.slice(0, 13)}...`} align={TextAlign.LEFT} />
                </div>
            </div>
        </AppLink>
    );
});
