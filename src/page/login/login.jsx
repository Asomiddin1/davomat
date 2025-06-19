import { Navigate } from "react-router-dom";
import "./login.css";
import {  useState } from "react";

const Login = () => {
  const [role, setRole] = useState("teacher");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo uchun: har doim login qilamiz
    if (userId && password) {
      localStorage.setItem("user", JSON.stringify({ userId, role }));
      window.location.href = "/"; // HomePage'ga o'tkazamiz
    }
  };


  
  
  
  

  return (
    <div className="login_bg">
      <div className="login-container">
        <h2 style={{ color: "#4a63f3" }}>Dars jadvali</h2>

        <div className="role-tabs">
          <button
            className={role === "teacher" ? "active" : ""}
            onClick={() => setRole("teacher")}
          >
            Ustoz
          </button>
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Talaba
          </button>
          <button
            className={role === "parent" ? "active" : ""}
            onClick={() => setRole("parent")}
          >
            Ota-Ona
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ID yoki elektron pochta"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parolingiz"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            KIRISH
          </button>
        </form>

        <a href="#" className="forgot">
          Parolni unutdingizmi?
        </a>
      </div>
    </div>
  );
};

export default Login;
