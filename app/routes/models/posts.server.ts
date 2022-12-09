export type tPost = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts;
};

export const getPost = async (id: number) => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return posts;
};
