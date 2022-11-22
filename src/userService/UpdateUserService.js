//const formData = new FormData();
//const fileField = document.querySelector('input[type="file"]');

//formData.append("fullname", { fullname });
//formData.append("profile_pic", fileField.files);

export const updateProfileStudent = async (fullname, email, password, file) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  formData.append("profile_pic", fileField.files[0]);
  formData.append("fullname", fullname);
  formData.append("email", email);
  formData.append("password", password);

  const url = `https://tutorins.herokuapp.com/api/v1/student/profile/`;
  const data = {
    fullname,
    email,
    password,
  };
  try {
    const store = window.localStorage;
    const token = store.getItem("token");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: formData,
    });
    console.log(data, "ini datatata");
    console.log(file, "ufufufufu");
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const updateProfileTutor = async (
  fullname,
  email,
  password,
  about,
  skills,
  profile_pic
) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  formData.append("profile_pic", fileField.files[0]);
  formData.append("fullname", fullname);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("about", about);
  formData.append("skills", skills);
  const url = `https://tutorins.herokuapp.com/api/v1/tutor/profile`; // _id ambil dari redux
  const data = {
    // yg distore pada saat login

    fullname,
    email,
    password,
    about,
    skills,
    profile_pic,
  };
  try {
    const store = window.localStorage;
    const token = store.getItem("tokenTutor");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token, //rencana mau ambil dari redux yg di store pada saat login
      },
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const updateProfileTutorHome = async (about, skills, profile_pic) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  formData.append("profile_pic", fileField.files[0]);
  formData.append("about", about);
  formData.append("skills", skills);

  const url = `https://tutorins.herokuapp.com/api/v1/tutor/profile`; // _id ambil dari redux
  const data = {
    // yg distore pada saat login
    about,
    skills,
    profile_pic,
  };
  try {
    const store = window.localStorage;
    const token = store.getItem("tokenTutor");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token, //rencana mau ambil dari redux yg di store pada saat login
      },
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
