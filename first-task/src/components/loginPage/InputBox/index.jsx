import "./InputBox.css";
import { useState } from "react";
import { logIn } from "../../../api/deptFetches";
import { useNavigate } from "react-router-dom";
import SingleInput from "./SingleInput";

function InputBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();

  const navigate = useNavigate();

  const handleSignInClick = async () => {
    if (email.includes("@")) {
      setEmailError("");
      const token = await logIn(email, password);
      if (token) {
        navigate("/home");
      }
    } else setEmailError("Invalid email address format");
  };

  return (
    <div className="log-in-form-container">
      <h2>Login</h2>
      <SingleInput
        inputName={"Email"}
        inputPlaceholder={"example@domain.com"}
        setInput={setEmail}
        emailError={emailError}
        isPassword={false}
      />
      <SingleInput
        inputName={"Password"}
        setInput={setPassword}
        isPassword={true}
      />
      <button className="log-in-button" onClick={handleSignInClick}>
        {" "}
        Sign In
      </button>
    </div>
  );
}

export default InputBox;
