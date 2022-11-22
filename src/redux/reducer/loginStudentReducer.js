const store = window.localStorage;
const fullname = store.getItem("fullname") || "";
const profile_pic = store.getItem("profile_pic") || "";
const _id = store.getItem("_id") || "";
const token = store.getItem("token") || "";
const email = store.getItem("email") || "";
const role = store.getItem("role") || "";

const initialState = {
  email: email,
  fullname: fullname,
  profile_pic: profile_pic,
  _id: _id,
  token: token,
  role: role,
};

const loginStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_STUDENT":
      return {
        ...state,
        email: action.payload.email,
        fullname: action.payload.fullname,
        profile_pic: action.payload.profile_pic,
        _id: action.payload._id,
        token: action.payload.token,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginStudentReducer;
