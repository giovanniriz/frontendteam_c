export const loginTutor = async (email, password) => {
  const url = "https://tutorins.herokuapp.com/api/v1/tutor/login";
  const data = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const loginStudent = async (email, password) => {
  const url = "https://tutorins.herokuapp.com/api/v1/student/login";
  const data = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const loginStudentGoogle = async (tokenId) => {
  const url = "https://tutorins.herokuapp.com/api/v1/auth/google/";
  const data = {
    token: tokenId,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const loginTutorGoogle = async (tokenId) => {
  const url = "https://tutorins.herokuapp.com/api/v1/auth/google_tutor/";
  const data = {
    token: tokenId,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const registrasiStudent = async (fullname, email, password) => {
  const url = "https://tutorins.herokuapp.com/api/v1/student/register";
  const data = {
    fullname,
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const registrasiTutor = async (fullname, email, password) => {
  const url = "https://tutorins.herokuapp.com/api/v1/tutor/register";
  const data = {
    fullname,
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const ReviewUser = async (rating, reviews, id) => {
  const url = `https://tutorins.herokuapp.com/api/v1/tutor/review/${id}`;
  const data = {
    rating,
    reviews,
  };
  try {
    const store = window.localStorage;
    const token = store.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
