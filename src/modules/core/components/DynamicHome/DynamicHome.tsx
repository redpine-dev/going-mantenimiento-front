import { Navigate } from 'react-router-dom';

const DynamicHome = () => {
  return <Navigate to={'/dashboard'} />;
};

export { DynamicHome };
