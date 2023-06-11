import React, { Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export const ArticleRatingAsync = React.lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={200} />}>
        <ArticleRatingAsync {...props} />
    </Suspense>
);
