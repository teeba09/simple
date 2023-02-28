export const getPosts = async () => {
  try {
    const res = await fetch(` https://jsonplaceholder.typicode.com/posts `);
    return res.json();
  } catch (err) {
    console.log("Error has occured :" + err);
  }
};
