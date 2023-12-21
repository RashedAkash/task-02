import React, { useContext } from 'react';
import { FirebaseContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(FirebaseContext);
  if (loading) {
    return <Loading />
  }
  
  if (user) {
    return children;
  }
  return <Navigate to='/login' />



};

export default PrivateRoute;