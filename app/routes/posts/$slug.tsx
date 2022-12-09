import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { tPost } from "../models/posts.server";
import { getPost } from "../models/posts.server";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug });
};

export default function PostSlug() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <main>
      {/* <h1>Some Post: {slug}</h1> */}
      <h1>Some Post: {slug}</h1>
    </main>
  );
}
