import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Fake";

const UserSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((d) => d.id !== action.payload.id);
    },
    updateUser: (state, action) => {
     state?.value?.map((user) => {
        if (user?.id == action.payload.id) {
          user.name = action.payload.name;
          user.username = action.payload.username;
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
