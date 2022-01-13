type Reducer = {
  user: null;
  type?: {};
  playlist: [];
  playing: boolean;
  token: string;
};

export const initialState: Reducer = {
  user: null,
  token: "",
  playlist: [],
  playing: false,
};

const reducer = (state: object, action: Reducer) => {
  console.log(action, "action");
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLIST": {
      return {
        ...state,
        playlist: action.playlist,
      };
    }
    default:
      return state;
  }
};
export default reducer;
