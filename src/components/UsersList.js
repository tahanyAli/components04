import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if(isLoading){
    // return <div>Loading...</div>
    return <div><Skeleton /></div>
  }
  if(error) {
    return <div>Error fetching data...</div>
  }
  return (
    <div>{data.length}</div>
  )
}

export default UsersList