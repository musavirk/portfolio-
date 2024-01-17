import MyProfile from "./components/MyProfile.jsx";
import Contact from "./components/Contact.jsx";
import Service from "./components/Service.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <MyProfile /> },
  { path: "/contact", element: <Contact /> },
  { path: "/service", element: <Service /> },
]);
export default router;
