export const handleLoginTutor = (
  token,
  email,
  fullname,
  about,
  _id,
  skills,
  profile_pic
) => {
  return {
    type: "LOGIN_TUTOR",
    payload: {
      token: token,
      email: email,
      fullname: fullname,
      about: about,
      _id: _id,
      skills: skills,
      profile_pic: profile_pic,
    },
  };
};
