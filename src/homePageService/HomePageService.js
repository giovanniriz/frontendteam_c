export const ContentHomePage = async () => {
  const url = `https://tutorins.herokuapp.com/api/v1/home`;
  const data = {};

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
