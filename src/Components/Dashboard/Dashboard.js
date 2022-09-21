import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='pt-16'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100 flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>        
                </div> 
                <div className="drawer-side w-[250px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li ><Link to="/dashboard">MCQ Chart</Link></li>
                        <li ><Link to="/dashboard/myprofile">My Profile</Link></li>
                        {/* <li ><Link to="/dashboard/">Sidebar Item 3</Link></li>s */}
                    </ul>                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;