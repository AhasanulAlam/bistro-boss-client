import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    // const { user } = useContext(AuthContext);
    const { user, loading } = useAuth();

    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    // const { isLoading, isError, data, error } = useQuery({
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () =>{
        //     const res = await fetch(`https://bistro-boss-server-ahasanulalam.vercel.app/carts?email=${user?.email}`, {
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from Axios ',res);
            return res.data;
        },
    })

    return [cart, refetch];

};

export default useCart;