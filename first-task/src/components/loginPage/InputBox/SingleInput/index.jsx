import { useState } from "react";
import "./SingleInput.css";
import { EyeOff, Eye } from "lucide-react";

function SingleInput({
  inputName,
  inputPlaceholder,
  setInput,
  emailError,
  isPassword,
}) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <div className="log-in-input-container">
      <h3>{inputName}:</h3>
      <div className="input-row">
        <input
          type={isPassword && isPasswordHidden ? "password" : "text"}
          placeholder={inputPlaceholder}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: isPassword ? "90%" : "100%" }}
        ></input>{" "}
        {isPassword && (
          <button
            onClick={() => {
              setIsPasswordHidden((prev) => !prev);
            }}
          >
            {isPasswordHidden ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {inputName === "Email" && emailError && (
        <p className="email-error">{emailError}</p>
      )}
    </div>
  );
}

export default SingleInput;
