import { Link } from 'react-router-dom';

import Logo from './Logo.component';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='flex flex-col'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex justify-center items-center'>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-purple-800'>Platform</h1>
                    <ul className='font-semibold text-gray-500'>
                        <li>Ask a doctor</li>
                        <li>Chat with a doctor</li>
                        <li>Get the App</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-purple-800'>Resources</h1>
                    <ul className='font-semibold text-gray-500'>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Help & Support</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-xl font-bold text-purple-800'>Company</h1>
                    <ul className='font-semibold text-gray-500'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className='text-lg font-semibold'>{year} &copy; Borcelle App</div>
        </footer>
    );
};

export default Footer;
