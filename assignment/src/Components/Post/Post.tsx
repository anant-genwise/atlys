import React, { Dispatch, SetStateAction } from "react";
import { Button, Typography } from "@mui/material";
import commentIcon from "../../assets/images/comment.png";
import "./post.styles.scss";

interface IPostProps {
  data: {
    name: string;
    relativeTime: number;
    text: string;
    icon: string;
    profile_pic: string;
    comments: number;
  };
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}

const Post: React.FC<IPostProps> = ({ data, setShowAuth }) => {
  return (
    <div className="user-post post" onClick={() => setShowAuth(true)}>
      <div className="flex">
        <div>
          <img className="br50" src={data.profile_pic} alt="icon" />
        </div>
        <div>
          <Typography>{data.name}</Typography>
          <Typography variant="body2" className="grey-light-text">
            {data.relativeTime}mins ago
          </Typography>
        </div>
      </div>
      <div className="flex">
        <div>
          <img className="br50" src={data.icon} alt="icon" />
        </div>
        <Typography className="grey-text" variant="body1">
          {data.text}
        </Typography>
      </div>
      <div className="align-center">
        <img src={commentIcon} alt="icon" />
        <Typography>{data.comments} comments</Typography>
      </div>
    </div>
  );
};

export default Post;
