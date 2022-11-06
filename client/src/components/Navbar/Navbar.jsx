import "./Navbar.scss";
import { Link } from "react-router-dom";

// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // home
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; // moon
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"; // sun
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"; // grid
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; // search
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined"; // person
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; // message
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"; // notification

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <h3>
            <Link to="/">Social Network App</Link>
          </h3>

          <HomeOutlinedIcon />

          <GridViewOutlinedIcon />

          <div className="search">
            <SearchOutlinedIcon />

            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <Person2OutlinedIcon />

          <EmailOutlinedIcon />

          <NotificationsOutlinedIcon />

          <div className="user">
            <img src="" alt="" />

            <span>Ilan Tsipkin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
