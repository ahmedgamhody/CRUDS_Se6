import { Link } from "react-router-dom";
import "./SideBar.css";
function SideBar() {
  return (
    <>
      <ul className=" list-unstyled text-center">
        <li>
          <Link to="/products">get All Products</Link>
        </li>
        <li>
          <Link to="/categories">get All Cateogries</Link>
        </li>
      </ul>
    </>
  );
}
export default SideBar;
