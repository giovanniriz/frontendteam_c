export const isFavorite = async (idCour) => {
  const url = "https://tutorins.herokuapp.com/api/v1/favorite/";
  const data = {
    course_id: idCour,
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
