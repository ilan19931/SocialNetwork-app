import "./Main.scss";
import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";

const Main = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <Stories />

        <Posts />
      </div>
    </div>
  );
};

export default Main;
