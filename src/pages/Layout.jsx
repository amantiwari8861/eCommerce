import { Outlet, useLocation } from 'react-router';
import '../assets/css/Layout.css'
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextWrapper';

const Layout = () => {
    const location = useLocation();
    const { theme, themes } = useContext(ThemeContext);
    return (
        <div className={`${theme === "dark" ? `${themes.dark.background} ${themes.dark.color}` :
         `${themes.light.background} ${themes.light.color}`}`}>
            <ToastContainer />
            <Navbar />
            {
                location.pathname === "/" ? <HomePage /> : <Outlet />
            }
        </div>
    )
}

export default Layout;