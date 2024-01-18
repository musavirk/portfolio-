import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Service from "./components/Service.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
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
