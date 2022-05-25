import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Here is Page1</h1>
      <Link to="/page1/detailA">Detail A</Link>
      <br />
      <Link to="/page1/detailB">Detail B</Link>
    </div>
  );
};
