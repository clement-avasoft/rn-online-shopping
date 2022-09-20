import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  name: string;
  email?: string;
  password: string;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: [
    {
      id: 1,
      name: 'Test',
      email: 'test@gmail.com',
      password: 'Test@123',
    },
  ] as UserState[],
  reducers: {
    signupUser: (state, action: PayloadAction<UserState>) => {
      const existingUsers: UserState[] = state;
      existingUsers.push(action.payload);
      state = existingUsers;
      return state;
    },
  },
});

export const {signupUser} = usersSlice.actions;
export default usersSlice.reducer;
