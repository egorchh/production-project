import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar, Sidebar } from 'widgets';

function App() {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
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
