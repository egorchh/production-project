import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to='/'>MAIN PAGE</Link>
            <Link to='/about'>ABOUT PAGE</Link>
            <Suspense fallback={'Loading...'} >
                <Routes>
                    <Route path='/' element={<MainPageLazy />}/>
                    <Route path='/about' element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
