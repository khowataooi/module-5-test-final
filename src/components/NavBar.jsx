import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1>
        <Link to="/products/list">Home</Link>|
        <Link to="/products/add">Create</Link>
      </h1>
      <hr />
    </>
  );
}
