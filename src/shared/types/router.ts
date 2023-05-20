import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line feature-sliced-design-validator/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}
