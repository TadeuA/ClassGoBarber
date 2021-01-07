import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { RouteProps } from './interface';
import { useAuth } from '../hooks';

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate && !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/dashboard' : '/' }} />
        );
      }}
    />
  );
};

export default Route;
