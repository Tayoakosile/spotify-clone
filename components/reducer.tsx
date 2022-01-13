type Reducer = {
  user: null;
  playlist: [];
  playing: boolean;
  token: string;
};

export const initialState: Reducer = {
  user: null,
  token: null,
  playlist: [],
  playing: false,
};

const reducer = (
  state: object,
  action: { type: string; user: object; token: string }
) => {
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
    default:
      return state;
  }
};
export default reducer;
