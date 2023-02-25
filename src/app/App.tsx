import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar, Sidebar } from 'widgets';

function App() {
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
