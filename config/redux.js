import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const addListener = createReduxBoundAddListener('root');

export { reduxNavigationMiddleware, addListener };
