import Logo from './Logo.component';
import Navbar from './Navbar.component';
import DownloadButton from './DownloadButton.component';
import MobileNav from './MobileNav.component';

const Header = () => {
    return (
        <header className='max-w-6xl mx-auto flex items-center justify-between sm:justify-around gap-4'>
            <MobileNav />

            <Logo />

            <Navbar />

            <DownloadButton
                className='hidden sm:inline border border-purple-800 rounded-2xl px-4 py-2 text-purple-800 hover:bg-purple-800 hover:text-white font-medium'
                title='Download'
            />
        </header>
    );
};

export default Header;
