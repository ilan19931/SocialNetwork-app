import "./LeftSideBar.scss";

// images
import img1 from "../../../images/LeftSideBar-icons/1.png";
import img2 from "../../../images/LeftSideBar-icons/2.png";
import img3 from "../../../images/LeftSideBar-icons/3.png";
import img4 from "../../../images/LeftSideBar-icons/4.png";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <div className="wrapper">
        <div className="item">
          <img src={img1} alt="" />
          <span>Friends</span>
        </div>

        <div className="item">
          <img src={img2} alt="" />
          <span>Groups</span>
        </div>

        <div className="item">
          <img src={img3} alt="" />
          <span>Marketplace</span>
        </div>

        <div className="item">
          <img src={img4} alt="" />
          <span>Watch</span>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default LeftSideBar;
