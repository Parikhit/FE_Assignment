import Logo from './Logo.component';
import Navbar from './Navbar.component';
import DownloadButton from './DownloadButton.component';
import MobileNav from './MobileNav.component';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='max-w-6xl mx-auto flex items-center justify-between sm:justify-around gap-4'>
            <MobileNav />

            <Link to='/'>
                <Logo />
            </Link>

            <Navbar />

            <Link to='/sign-in'>
                <DownloadButton
                    className='border border-purple-800 rounded-2xl px-4 py-2 text-purple-800 hover:bg-purple-800 hover:text-white font-medium'
                    title='Login'
                />
            </Link>
        </header>
    );
};

export default Header;
