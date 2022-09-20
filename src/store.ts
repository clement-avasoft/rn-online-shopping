import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './global_states/users.state';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
