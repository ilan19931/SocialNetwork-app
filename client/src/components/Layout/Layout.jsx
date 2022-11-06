import "./Layout.scss";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
