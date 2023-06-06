import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserMounted, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

function App() {
    const dispatch = useAppDispatch();
    const isMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isMounted) {
        return <PageLoader />;
    }

    return (
        <Suspense fallback="">
            <div className="app">
                <Navbar />
                <div className="main">
                    <Sidebar />
                    { isMounted && <AppRouter />}
                </div>
            </div>
        </Suspense>
    );
}

export default App;
