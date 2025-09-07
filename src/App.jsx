// App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Login from "./page/login/login";
import Pomidor from "./panel/Student/pomidor/pomidor";
import Plans from "./panel/Student/plans/plans";
import Message from "./panel/Student/message/message";
import StudentInfo from "./panel/Student/student-info/st-info";
import Dashboard from "./panel/Student/Dashboard";
import TeacherDashboard from "./panel/teacher/teacher-dashboard";
import AdminDashboard from "./panel/admin/admin-dashboard";
import ParentDashboard from "./panel/parent/parent-dashboard";
import ParentSettings from "./panel/Parent/settings/p-settings";

// Role tekshiruvchi component
function PrivateRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("role"); // login paytida saqlanadi
  if (!role) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/login" replace />;
  return children;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Barchaga ochiq sahifalar */}
      <Route path="login" element={<Login />} />

      {/* Faqat admin */}
      <Route
        path="admin-dashboard"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* Faqat student */}
      <Route
        index
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="message"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <Message />
          </PrivateRoute>
        }
      />
      <Route
        path="student-info"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <StudentInfo />
          </PrivateRoute>
        }
      />
      <Route
        path="plans"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <Plans />
          </PrivateRoute>
        }
      />
      <Route
        path="pomidor"
        element={
          <PrivateRoute allowedRoles={["student"]}>
            <Pomidor />
          </PrivateRoute>
        }
      />

      {/* Faqat teacher */}
      <Route
        path="tacher-dashboard"
        element={
          <PrivateRoute allowedRoles={["teacher"]}>
            <TeacherDashboard />
          </PrivateRoute>
        }
      />
      {/* Faqat Parent */}
      <Route
        path="parent-dashboard"
        element={
          <PrivateRoute allowedRoles={["parent"]}>
            <ParentDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="settings"
        element={
          <PrivateRoute allowedRoles={["parent"]}>
            <ParentSettings />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
