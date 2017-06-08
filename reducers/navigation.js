import { AppNavigator } from '../navigators/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};
