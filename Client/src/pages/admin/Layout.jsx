import React, { useEffect } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Adminsidebar from '../../components/Adminsidebar';
import { Outlet } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useAppContext } from '../../context/Appcontext';

const Layout = () => {
    const { isAdmin, fetchIsAdmin, user } = useAppContext();

    useEffect(() => {
        if (user) fetchIsAdmin();
    }, [user, fetchIsAdmin]);

    if (!user) return <Loading />;

    return isAdmin ? (
        <>
            <AdminNavbar />
            <div className='flex'>
                <Adminsidebar />
                <div className='flex flex-1 justify-center px-4 py-10 md:px-10 h-[calc(100vh-72px)] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </>
    ) : <Loading />;
};

export default Layout;
