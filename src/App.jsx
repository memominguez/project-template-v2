import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import AboutUsPage from "./pages/AboutUs";
import ProjectsPage from "./pages/Projects";
import TeamPage from "./pages/Team";
import TestimonialPage from "./pages/Testimonial";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import TestingPage from "./pages/Testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/testimonial", element: <TestimonialPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/testing", element: <TestingPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
