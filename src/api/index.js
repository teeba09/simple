export const getPosts = async () => {
  try {
    const res = await fetch(` https://jsonplaceholder.typicode.com/posts `);
    return res.json();
  } catch (err) {
    console.log("Error has occured :" + err);
  }
};

export const deletePosts = async (id) => {
  console.log("id", id);
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.json();
  } catch (err) {
    console.log("Error has occured :" + err);
  }
};
