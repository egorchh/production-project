import React, { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback="">
            <div className="app">
                <Navbar />
                <div className="main">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
