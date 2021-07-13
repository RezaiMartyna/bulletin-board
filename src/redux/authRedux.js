/* selectors */
export const isLogged = ({auth}) => auth.isLogged;
export const getLoggedUser = ({auth}) => auth.login;

/* action name creator */
const reducerName = 'auth';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_USER = createActionName('UPDATE_USER');

/* action creators */
export const updateUser = payload => ({ payload, type: UPDATE_USER });

/* thunk creators */

/* reducer */
export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case  UPDATE_USER: {
      return {
        ...statePart,
        isLogged: action.payload.isLogged,
        login: action.payload.login, 
      };
    }
    default:
      return statePart;
  }
};
