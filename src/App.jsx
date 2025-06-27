// App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Login from "./page/login/login";
import Homapage from "./page/home/homapage";
import Pomidor from "./page/pomidor/pomidor";
import Plans from "./page/plans/plans";
import Message from "./page/message/message";
import StudentInfo from "./page/student-info/st-info";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homapage />} />
      <Route path="login" element={<Login />} />
      <Route path="pomidor" element={<Pomidor />} />
      <Route path="plans" element={<Plans />} />
      <Route path="message" element={<Message />} />
      <Route path="student-info" element={<StudentInfo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
