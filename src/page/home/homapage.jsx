// homapage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentPanel from "../../component/panel/student-panel";
import TeacherPanel from "../../component/panel/teacher-panel";
import ParentsPanel from "../../component/panel/parents-panel";

function Homapage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {user.role == "student" && <StudentPanel />}
      {user.role == "teacher" && <TeacherPanel />}
      {user.role == "parent" && <ParentsPanel />}
    </>
  );
}

export default Homapage;
