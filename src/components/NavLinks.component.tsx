import { Link } from 'react-router-dom';

type NavLinkProps = {
    title: string;
    address: string;
    active?: string;
    setActive: (title: string) => void;
};

const NavLinks = ({ title, address, active, setActive }: NavLinkProps) => {
    return (
        <Link to={address}>
            <div
                className='font-semibold sm:text-lg hover:scale-105 transform'
                onClick={() => setActive(title)}
            >
                {title}
            </div>
            {active === title && <div className='border-2 rounded-xl border-purple-900'></div>}
        </Link>
    );
};

export default NavLinks;
