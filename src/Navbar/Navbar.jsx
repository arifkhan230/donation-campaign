import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'
const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-10 relative z-50'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='flex gap-10 mt-10 md:mt-0'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-lg" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-lg" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : ""
                    }
                >
                    Donation
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-lg" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : ""
                    }
                >
                    Statistics
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;