import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useData = () => {
  const axiosSecure = useAxiosSecure();
  const {  data:todo } = useQuery({
  queryKey: ['classes'],
  queryFn: async () => {
    const data = await axiosSecure.get('/todo')
    return data.data
    
  },
})
  return {todo}
};

export default useData;