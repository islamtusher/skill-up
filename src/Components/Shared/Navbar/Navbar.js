import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='max-w-[1320px] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to=''>Item 1</Link></li>
                            <li tabIndex="0">
                                <Link to='' className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link to=''>Submenu 1</Link></li>
                                    <li><Link to=''>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link to=''>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to='' className="btn btn-ghost normal-case text-xl">SKILL UP</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''>Courses</Link></li>                        
                        <li><Link to='/mcq'>Quiz</Link></li>
                        <li><Link to=''>Courses</Link></li>
                        <li><Link to=''>Teachers</Link></li>
                        <li><Link to=''>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span class="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    <div class="w-10 rounded-full">
                        <img className='rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;