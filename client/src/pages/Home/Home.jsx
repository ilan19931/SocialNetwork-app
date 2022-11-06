import "./Home.scss";

import LeftSideBar from "../../components/Home/LeftSideBar/LeftSideBar";
import Main from "../../components/Home/Main/Main";
import RightSideBar from "../../components/Home/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="home">
      <LeftSideBar />

      <Main />

      <RightSideBar />
    </div>
  );
};

export default Home;
