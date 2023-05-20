import React, { Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ProfileRatingAsync = React.lazy(() => import('./ProfileRating'));

export const ProfileRatingLazy = (props: ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={200} />}>
        <ProfileRatingAsync {...props} />
    </Suspense>
);
