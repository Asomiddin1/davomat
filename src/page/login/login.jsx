import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("teacher");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  if (userId && password) {
    // Agar admin bo'lsa
    if (userId.toLowerCase() === "admin") {
      localStorage.setItem("role", "admin");
      localStorage.setItem("user", JSON.stringify({ userId, role: "admin" }));
      navigate("/admin-dashboard");
      return; // boshqa shartlarga o'tmaslik uchun
    }

    // Oddiy foydalanuvchilar uchun
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify({ userId, role }));

    if (role === "teacher") navigate("/tacher-dashboard");
    else if (role === "student") navigate("/");
    else if (role === "parent") navigate("/parent-dashboard");
    else navigate("/");
  }
  };

  return (
    <div className="login_bg text-[black]">
      <div className="login-container">
        <h2 style={{ color: "#4a63f3" }}>Dars jadvali</h2>

        <div className="role-tabs">
          <button
            type="button"
            className={role === "teacher" ? "active" : ""}
            onClick={() => setRole("teacher")}
          >
            Ustoz
          </button>
          <button
            type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Talaba
          </button>
          <button
            type="button"
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
