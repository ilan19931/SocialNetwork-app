import PostForm from "./PostForm/PostForm";
import "./Posts.scss";

const Posts = () => {
  return (
    <div className="posts">
      <div className="card">
        <PostForm />
      </div>
    </div>
  );
};

export default Posts;
