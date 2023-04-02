import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-line.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <div className={styles.skeletonWrapper}>
                <Skeleton
                    className={styles.skeletonLogo}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton className={styles.skeleton} width={670} height={30} />
                <Skeleton className={styles.skeleton} width={400} height={30} />
                <Skeleton className={styles.skeleton} width={1090} height={230} />
                <Skeleton className={styles.skeleton} width={1090} height={230} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                key={error}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <Avatar
                    size={200}
                    src={data?.img}
                    className={styles.logo}
                />
                <div className={styles.info}>
                    <Text
                        title={data?.title}
                        text={data?.subtitle}
                        align={TextAlign.LEFT}
                        size={TextSize.L}
                    />
                    <div className={styles.infoBlocks}>
                        <div className={styles.viewsBlock}>
                            <EyeIcon className={styles.icon} />
                            <Text className={styles.text} text={String(data?.views)} />
                        </div>
                        <div className={styles.dateBlock}>
                            <CalendarIcon className={styles.icon} />
                            <Text className={styles.text} text={data?.createdAt} />
                        </div>
                    </div>
                </div>
                <div className={styles.blocksWrapper}>
                    {data?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
