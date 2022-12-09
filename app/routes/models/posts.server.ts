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
