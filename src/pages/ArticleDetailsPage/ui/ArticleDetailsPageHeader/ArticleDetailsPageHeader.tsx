import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, AppButtonTheme } from '@/shared/ui';
import { AppButtonSize } from '@/shared/ui/AppButton/ui/AppButton';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import EditIcon from '@/shared/assets/icons/edit-article.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { getArticleDetailsData } from '@/entities/Article';
import { AppRoutes } from '@/shared/config/routerConfig/routerConfig';
import { getCanUserEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const articleData = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanUserEditArticle);
    const navigate = useNavigate();

    const onGoBackToArticles = useCallback(() => {
        window.history.back();
    }, []);

    const onEditArticle = useCallback(() => {
        navigate(`${AppRoutes.ARTICLE_DETAILS}${articleData?.id}/edit`);
    }, [articleData?.id, navigate]);

    return (
        <div className={classNames(styles.articleDetailsPageHeader, {}, [className])}>
            <AppButton
                theme={AppButtonTheme.CLEAR}
                size={AppButtonSize.L}
                onClick={onGoBackToArticles}
            >
                <Icon className={styles.backSVG} Svg={ArrowLeft} />
            </AppButton>
            {canEdit && (
                <AppButton
                    className={styles.editButton}
                    theme={AppButtonTheme.CLEAR}
                    onClick={onEditArticle}
                >
                    <Icon className={styles.backSVG} Svg={EditIcon} />
                </AppButton>
            )}
        </div>
    );
});
