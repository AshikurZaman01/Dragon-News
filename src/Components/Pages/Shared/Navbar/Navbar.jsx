import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Career', link: '/career' },
    ];

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
            <div className='flex-grow flex justify-center'>
                <div className='flex items-center gap-4'>
                    {
                        routes.map(route => (
                            <NavLink
                                key={route.id}
                                to={route.link}
                                className={({ isActive }) => isActive ? 'text-gray-400 font-semibold' : 'text-black'}
                                aria-label={`Navigate to ${route.name}`}
                            >
                                {route.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <div>
                <Login />
            </div>
        </nav>
    );
};

export default Navbar;