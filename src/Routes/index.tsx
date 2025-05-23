import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Home, Projects, Contact, About, PageNotFound, Skills } from "../Pages";
import { TopNavBar } from "./topNavBar";

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
        <AppLayout />
      </BrowserRouter>
    </>
  );
}
