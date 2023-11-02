import { Button } from "@mui/base";
import { Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import showPasswordIcon from "../../assets/images/showPassword.png";
import closeIcon from "../../assets/images/close.png";
import { useNavigate, useLocation } from "react-router-dom";

interface ILoginProps {
  isLoginVisible: boolean;
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}
const Login: React.FC<ILoginProps> = ({ isLoginVisible, setShowAuth }) => {
  const [showLogin, setShowLogin] = useState(isLoginVisible);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {showLogin ? (
        <div className="login-cont">
          <div className="post login">
            {location.pathname === "/home" && (
              <div className="close-modal" onClick={() => setShowAuth(false)}>
                <img src={closeIcon} alt="icon" />
              </div>
            )}
            <div className="heading">
              <Typography>WELCOME BACK</Typography>
              <Typography>Log into your account</Typography>
            </div>
            <Typography>Email or Username</Typography>
            <div>
              <Typography className="input grey-text" variant="body1">
                Enter your email or username
              </Typography>
            </div>
            <div className="space-between">
              <Typography>Password</Typography>
              <Typography>Forgot password?</Typography>
            </div>
            <div className="space-between input grey-text">
              <Typography variant="body1">Enter your password</Typography>
              <img src={showPasswordIcon} alt="icon" />
            </div>
            <Button
              className="cta-btn login-btn"
              onClick={() => {
                navigate("/home");
                setShowAuth(false);
              }}
            >
              Login now
            </Button>
            <Typography variant="body2" onClick={() => setShowLogin(false)}>
              <span className="grey-text"> Not registered yet? </span> Register
              →
            </Typography>
          </div>
        </div>
      ) : (
        <div className="login-cont">
          <div className="post login">
            {location.pathname === "/home" && (
              <div className="close-modal" onClick={() => setShowAuth(false)}>
                <img src={closeIcon} alt="icon" />
              </div>
            )}
            <div className="heading">
              <Typography className="grey-text">SIGN UP</Typography>
              <Typography>Create an account to continue</Typography>
            </div>
            <Typography>Email</Typography>
            <div>
              <Typography className="input grey-text">
                Enter your email
              </Typography>
            </div>
            <Typography>Username</Typography>
            <div>
              <Typography className="input grey-text">
                Chose a preferred username
              </Typography>
            </div>
            <div className="space-between">
              <Typography>Password</Typography>
              <Typography>Forgot password?</Typography>
            </div>
            <div className="space-between input">
              <Typography className="grey-text">Enter your password</Typography>
              <img src={showPasswordIcon} alt="icon" />
            </div>
            <Button
              className="cta-btn login-btn"
              onClick={() => {
                navigate("/home");
                setShowAuth(false);
              }}
            >
              Login now
            </Button>
            <Typography variant="body2" onClick={() => setShowLogin(true)}>
              <span className="grey-text">Already have an account? </span> Login
              →
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
