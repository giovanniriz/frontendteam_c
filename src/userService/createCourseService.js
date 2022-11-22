export const createCourseServ = async (
  file,
  title,
  category,
  subject,
  level,
  description,
  regular,
  premium
) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  formData.append("cover_img", fileField.files[0]);
  formData.append("title", title);
  formData.append("category", category);
  formData.append("subject", subject);
  formData.append("level_id", level);
  formData.append("description", description);
  formData.append("regular_price", regular);
  formData.append("premium_price", premium);

  const url = "https://tutorins.herokuapp.com/api/v1/courses";
  const data = {};
  try {
    const store = window.localStorage;
    const token = store.getItem("tokenTutor");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
