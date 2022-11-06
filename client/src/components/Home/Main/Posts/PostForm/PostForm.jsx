import "./PostForm.scss";

// images
import Image from "../../../../../images/addPost/img.png";
import Map from "../../../../../images/addPost/map.png";
import Friend from "../../../../../images/addPost/friend.png";

const PostForm = () => {
  return (
    <form className="postForm">
      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <textarea name="body" rows="3" placeholder="What's on your mind Ilan Tsipkin?"></textarea>
      </div>

      <hr />

      <div className="bottom">
        <div className="items-container">
          <div className="item">
            <img src={Image} alt="" />
            <span>Add Image</span>
          </div>

          <div className="item">
            <img src={Map} alt="" />
            <span>Add Location</span>
          </div>

          <div className="item">
            <img src={Friend} alt="" />
            <span>Tag Friends</span>
          </div>
        </div>

        <button>Share Post</button>
      </div>
    </form>
  );
};

export default PostForm;
