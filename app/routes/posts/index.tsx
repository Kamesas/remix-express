import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { tPost } from "../models/posts.server";
import { getPosts } from "../models/posts.server";

const getUser = async (id: number) => {
  return fetch(`https://reqres.in/api/users?page=${id}`);
};

export async function loader() {
  const user = await getUser(1);
  // const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await getPosts();

  return json({
    user: await user.json(),
    posts: (await posts.json()) as Array<tPost>,
    // posts: ((await posts.json()) as Array<tPost>)?.map((item) => ({
    //   id: item?.id,
    //   title: item?.title,
    // })),
  });
}

export default function Index() {
  const { posts, user } = useLoaderData<typeof loader>();

  console.log({ user, posts });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Posts</h1>
      <ul>
        <Link to={"/test"}> To test page</Link>
        <Link to={"/"}> To Home page</Link>
      </ul>

      <ul>
        {posts?.map((item) => {
          return <li key={item?.id}>{item?.title}</li>;
        })}
      </ul>
    </div>
  );
}
