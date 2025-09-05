import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useAuth, useUser } from '@clerk/clerk-react';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [shows, setShows] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const { user } = useUser();
    const { getToken } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const fetchIsAdmin = async () => {
        try {
            if (!user) return;
            const token = await getToken();
            const { data } = await axios.get('/api/admin/isAdmin', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setIsAdmin(data.isAdmin);

            if (!data.isAdmin && location.pathname.startsWith('/admin')) {
                navigate('/');
                toast.error('You are not authorized to access admin panel');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchShows = async () => {
        try {
            const { data } = await axios.get('/api/show/getmovies');
            if (data.success) setShows(data.shows);
            else toast.error(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFavorites = async () => {
        try {
            if (!user) return;
            const token = await getToken();
            const { data } = await axios.get('/api/user/getfavorites', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.success) setFavorites(data.movies);
            else toast.error(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchShows();
    }, []);

    useEffect(() => {
        if (user) {
            fetchIsAdmin();
            fetchFavorites();
        }
    }, [user]);

    return (
        <AppContext.Provider value={{
            axios,
            user,
            navigate,
            isAdmin,
            fetchIsAdmin,
            getToken,
            fetchFavorites,
            favorites,
            setFavorites,
            shows
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
