import { links } from '../utils/nav-links';

const MobileNav = () => {
    return (
        <nav className='sm:hidden'>
            <div className='navbar bg-base-100'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-7 w-7'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h7'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            {links.map((link) => (
                                <li
                                    key={link.title}
                                    className='hover:scale-105 transform text-md font-semibold'
                                >
                                    {link.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
