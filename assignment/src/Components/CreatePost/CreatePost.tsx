import { Button, Typography } from "@mui/material";
import React, { SetStateAction, Dispatch } from "react";
import commentIcon from "../../assets/images/post.png";
import "./createPost.styles.scss";

interface ICreatePost {
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}

const CreatePost: React.FC<ICreatePost> = ({ setShowAuth }) => {
  return (
    <div className="create-post post" onClick={() => setShowAuth(true)}>
      <Typography variant="body1" className="white-text">
        Create post
      </Typography>
      <div className="flex">
        <div>
          <img className="br50" src={commentIcon} alt="icon" />
        </div>
        <div className="grey-text">How are you feeling today?</div>
      </div>
      <div className="btn-container">
        <Button className="cta-btn">Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
