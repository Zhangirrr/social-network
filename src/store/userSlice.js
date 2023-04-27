import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${endpoint}/users?login=${login}&password=${password}`
      );

      if (!response.ok) {
        throw new Error("server error!");
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error("There's no such user :(");
      }

      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/regUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${endpoint}/users?login=${login}&password=${password}`,
        {
          method: "POST",
          body: JSON.stringify({ login, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeUser = createAsyncThunk(
  "user/changeUser",
  async ({ id, email, username, avatar, description }, { rejectWithValue }) => {
    let formData = {};

    if (email) formData.email = email;
    if (username) formData.username = username;
    if (avatar) formData.avatar = avatar;
    if (description) formData.description = description;

    try {
      const response = await fetch(`${endpoint}/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify( formData ),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error("couldn't change parameters :(");
      }

      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      login: "anume",
      password: "qwerty",
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    dismissError(state) {
      state.error = null;
    },

    logOut(state) {
      state.user = null;
    },
  },
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

export const { auth, logOut, dismissError } = UserSlice.actions;

export default UserSlice;
