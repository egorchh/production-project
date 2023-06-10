import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

export interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement | null;
    off: ReactElement | null;
}

export const ToggleFeatures = ({ on, off, feature }: ToggleFeaturesProps) => {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
