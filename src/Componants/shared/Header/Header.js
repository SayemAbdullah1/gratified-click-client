import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?
            <>
                    <li className='font-semibold'><Link to='/review'>My review</Link></li>
                    <li className='font-semibold'><Link to='/orders'>Add services</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    <li className='font-semibold'><Link to='/' onClick={handleLogOut}>Sign Out</Link></li>
                </>
                :
                <>
                <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
                </>
               
                
            }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Gratified Click</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-info">Get started</Link>
            </div>
        </div>
    );
};

export default Header;