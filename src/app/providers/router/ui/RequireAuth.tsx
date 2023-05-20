import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { AppRoutes } from '@/shared/const/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
    }

    return children;
}
