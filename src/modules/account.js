// 액션타입
const CHANGE_INPUT = "account/CHANGE_INPUT";
const REGISTER = "account/REGISTER";
const SIGN_IN = "account/SIGN_IN";
const SIGN_OUT = "account/SIGN_OUT";
const RESET = "account/RESET";

// 액션함수
export const changeInput = (target) => ({
  type: CHANGE_INPUT,
  target,
});

export const register = (input) => ({
  type: REGISTER,
  input,
});

export const signIn = (input) => ({
  type: SIGN_IN,
  input,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const reset = () => ({
  type: RESET,
});

// 초깃값
const initialState = {
  input: {
    email: "",
    nickname: "",
    password: "",
  },
  accounts: [
    {
      email: "1234@test.com",
      nickname: "철이",
      password: "1234-abcd",
    },
    {
      email: "5678@test.com",
      nickname: "jane",
      password: "5678!efgh",
    },
  ],
  isSignIn: false,
  user: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      const { id, value } = action.target;
      return {
        ...state,
        input: {
          ...state.input,
          [id]: value,
        },
      };
    case REGISTER:
      return {
        ...state,
        accounts: state.accounts.concat(action.input),
      };
    case SIGN_IN:
      const { email, password } = action.input;
      const confirm = state.accounts.find(
        (account) => account.email === email && account.password === password
      );
      return {
        ...state,
        isSignIn: confirm ? true : false,
        user: confirm,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignIn: false,
      };
    case RESET:
      return {
        ...state,
        input: initialState.input,
      };
    default:
      return state;
  }
};

export default accountReducer;
