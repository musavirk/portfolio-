import MyProfile from "./components/MyProfile.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <MyProfile /> },
  { path: "/contact", element: <Contact /> },
]);
export default router;
