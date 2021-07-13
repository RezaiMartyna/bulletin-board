
export const initialState = {
  posts: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },

  auth: {
    isLogged: true,
    login: '', 
  },
};
