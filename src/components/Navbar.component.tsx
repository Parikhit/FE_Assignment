import { useState } from 'react';

import NavLinks from './NavLinks.component';

import { links } from '../utils/nav-links';

const Navbar = () => {
    const [active, setActive] = useState<string>('How it Works');

    return (
        <nav className='mx-auto hidden sm:inline'>
            <div className='flex items-center justify-between gap-8'>
                {links.map((link) => (
                    <NavLinks
                        key={link.title}
                        title={link.title}
                        address={link.address}
                        active={active}
                        setActive={setActive}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
