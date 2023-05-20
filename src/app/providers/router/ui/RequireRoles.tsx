import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserRoles, UserRole } from '@/entities/User';
import { AppRoutes } from '@/shared/const/router';

interface RequireRolesProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireRoles({ children, roles }: RequireRolesProps) {
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRole = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);

            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequiredRole) {
        return <Navigate to={AppRoutes.FORBIDDEN} state={{ from: location }} replace />;
    }

    return children;
}
