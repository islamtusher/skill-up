import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AllClassQuiz = () => {
    return (
        <div className='min-h-screen max-w-[1320px] flex justify-center '>
            <div className="">
                <h1>Let's Prepare Your Self</h1>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* <li><Link to='allclassquiz'>All Class</Link></li> */}
                        <li><Link to='class6th'>Class 6th</Link></li>
                        <li><Link to='class7th'>Class 7th</Link></li>
                        <li><Link to='/'>Item 1</Link></li>
                        <li><Link to='/'>Item 3</Link></li>
                    </ul>
                </div>
                <Outlet/>
                {/* <h1>All Class</h1> */}
            </div>
        </div>
    );
};

export default AllClassQuiz;