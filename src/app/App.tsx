import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserMounted, userActions } from '@/entities/User';

function App() {
    const dispatch = useDispatch();
    const isMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
