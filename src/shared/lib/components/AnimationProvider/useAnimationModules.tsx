import { useContext } from 'react';
import { AnimationContext, AnimationContextPayload } from './AnimationProvider';

export function useAnimationModules() {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
}
