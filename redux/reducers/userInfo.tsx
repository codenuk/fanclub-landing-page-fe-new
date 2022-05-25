interface IAction {
  type: string;
  userInfo: any;
}

export interface IInitialState {
  userInfo: any;
}

const initialState: IInitialState = {
  userInfo: null,
};

const reducer = (state = initialState, action: IAction): any => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default reducer;
