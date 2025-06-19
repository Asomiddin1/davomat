import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentPanel from "../../component/panel/student-panel";
import TeacherPanel from "../../component/panel/teacher-panel";
import ParentsPanel from "../../component/panel/parents-panel";

function Homapage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, []);

  if (!user) return null; // user yuklanayotgan bo‘lsa, hech narsa ko‘rsatmaydi

  return (
    <>
      {user.role === "student" && <StudentPanel />}
      {user.role === "teacher" && <TeacherPanel />}
      {user.role === "parent" && <ParentsPanel />}
    </>
  );
}

export default Homapage;
