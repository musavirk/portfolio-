import About from "./view/About.jsx";
import Contact from "./view/Contact.jsx";
import Service from "./view/Service.jsx";
import Skills from "./view/Skills.jsx";
import Education from "./view/Education.jsx";
import Projects from "./view/Projects.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/education", element: <Education /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/service", element: <Service /> },
]);
export default router;
