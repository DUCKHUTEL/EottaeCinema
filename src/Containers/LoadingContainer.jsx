import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingComponent } from '../Components/LoadingComponent/LoadingComponent';

export function LoadingContainer() {
  const loading = useSelector(state => state.theaters.loading);
  return (<LoadingComponent loading={loading}/>);
};