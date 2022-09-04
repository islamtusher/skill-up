import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#0099ff] '>
            <div className="navbar max-w-[1320px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to=''>Home</Link></li>
                            <li><Link to=''>About Us</Link></li>
                            <li><Link to=''>Courses</Link></li>                        
                            <li><Link to='/mcq'>Quiz</Link></li>
                            <li><Link to=''>Courses</Link></li>
                            <li><Link to=''>Teachers</Link></li>
                            <li><Link to=''>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to='' className="font-['Caveat_Brush'] text-3xl text-primary font-bold">SKILL UP</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-[jost] text-white p-0">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''>Courses</Link></li>                        
                        <li><Link to='/mcq'>Quiz</Link></li>
                        <li><Link to=''>Courses</Link></li>
                        <li><Link to=''>Teachers</Link></li>
                        <li><Link to=''>Contact </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="">
                        { user && <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span class="badge badge-sm indicator-item">8</span>
                            </div>
                        </label> }
                    </div>
                    <div class="">

                        {
                            user ? <img className='rounded-full w-10' src="https://placeimg.com/80/80/people" alt='' /> 
                                :
                                <div div className='flex items-center  font-[jost] '>
                                    <button className='btn bg-transparent py-0 tracking-[2px] mr-2'><Link to=''>Login</Link></button>
                                    <button className='btn bg-transparent py-0 tracking-[2px] '><Link to=''>Sign-Up</Link></button>
                                </div>
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;