import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { TopNavBar } from "./topNavBar";

const Home = React.lazy(() => import("../Pages/Home"));
const Projects = React.lazy(() => import("../Pages/Projects"));
const Contact = React.lazy(() => import("../Pages/Contact"));
const About = React.lazy(() => import("../Pages/About"));
const PageNotFound = React.lazy(() => import("../Pages/404Page"));
const Skills = React.lazy(() => import("../Pages/Skills"));
const Articles = React.lazy(() => import("../Pages/Articles"));

export function AppRoute() {
  const AppLayout = () => {
    const location = useLocation();
    const hideNavOnRoutes = ["/", "/projects", "/contact", "/about"];
    const shouldShowNav = hideNavOnRoutes.includes(location.pathname);
    return (
      <>
        {shouldShowNav && <TopNavBar />}
        <div className={shouldShowNav ? "app-container" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </div>
      </>
    );
  };

  return (
    <>
      {/* /** * BrowserRouter is a component in React Router used for handling
      client-side * routing in web applications. It leverages the HTML5 history
      API to manage * the application's navigation state and keep the UI in sync
      with the URL * in the browser's address bar.  */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppLayout />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
