import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  surname: string;
  officeNumber: number;
  position: string;
  email: string;
  department: string;
  phone: string;
}

export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    {
      id: "1",
      department: "Руководство",
      email: "petrov@company.ru",
      name: "Алексей",
      surname: "Петров",
      officeNumber: 100,
      phone: "+7 (922) 123 123 11",
      position: "Директор",
    },
    {
      id: "2",
      department: "Важные дела",
      email: "ivanov@company.ru",
      name: "Сергей",
      surname: "Иванов",
      officeNumber: 123,
      phone: "+7999666333",
      position: "Заместитель директора",
    },
    {
      id: "3",
      department: "Важные дела",
      email: "nikita@company.ru",
      name: "Никита",
      surname: "Крылов",
      officeNumber: 115,
      phone: "+7999666333",
      position: "Начальник отдела",
    },
    {
      id: "4",
      department: "Важные дела",
      email: "mail@company.ru",
      name: "Татьяна",
      surname: "Юдина",
      officeNumber: 105,
      phone: "+7999666333",
      position: "Секретарь",
    },
  ],
};

export const UsersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<User>) {
      state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { setUsers, addUser, deleteUser } = UsersSlice.actions;
export default UsersSlice.reducer;
