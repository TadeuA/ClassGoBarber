import {
  RouteProps as ReactDOMRoutProps,
  ComponentType,
} from 'react-router-dom';

export interface RouteProps extends ReactDOMRoutProps {
  isPrivate?: boolean;
  component: ComponentType;
}
