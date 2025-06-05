import "./LoginPage.css";
import InputBox from "../../components/loginPage/inputBox";
import TextBox from "../../components/loginPage/TextBox";

function LoginPage() {
  return (
    <div className="log-in-container">
      <TextBox />
      <InputBox />
    </div>
  );
}

export default LoginPage;
