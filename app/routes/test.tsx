import { Link } from "@remix-run/react";

export default function Test() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Test Remix page</h1>
      <ul>
        <Link to={"/"}> To home page</Link>
      </ul>
    </div>
  );
}
