const handleLoginStudent = (email, fullname, profile_pic, _id, token) => {
  return {
    type: "LOGIN_STUDENT",
    payload: {
      email: email,
      fullname: fullname,
      profile_pic: profile_pic,
      _id: _id,
      token: token,
    },
  };
};

export default handleLoginStudent;
