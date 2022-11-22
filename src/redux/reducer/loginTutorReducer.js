const store = window.localStorage;
const fullname = store.getItem("fullnameTutor") || "";
const profile_pic = store.getItem("profile_picTutor") || "";
const about = store.getItem("aboutTutor") || "";
const _id = store.getItem("_idTutor") || "";
const token = store.getItem("tokenTutor") || "";
const email = store.getItem("emailTutor") || "";
const skills = store.getItem("skillsTutor") || "";

const initialState = {
  token: token,
  email: email,
  fullname: fullname,
  about: about,
  _id: _id,
  skills: skills,
  profile_pic: profile_pic,
};

const loginTutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_TUTOR":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        fullname: action.payload.fullname,
        about: action.payload.about,
        _id: action.payload._id,
        skills: action.payload.skills,
        profile_pic: action.payload.profile_pic,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginTutorReducer;
