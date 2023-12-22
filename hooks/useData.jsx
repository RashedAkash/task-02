import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useData = () => {
  const axiosSecure = useAxiosSecure();
  const {  data:todo,refetch } = useQuery({
  queryKey: ['todo'],
  queryFn: async () => {
    const data = await axiosSecure.get('/todo')
    return data.data
    
  },
})
  return {todo,refetch}
};

export default useData;