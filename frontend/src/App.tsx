import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing/landing-page";
import AboutPage from "./components/pages/about/about-page";
import RootLayout from "./components/layouts/root-layout";

interface RouteType {
  path: string;
  Layout?: any;
  Component: any;
}

const routes: RouteType[] = [
  {
    path: "/",
    Component: LandingPage,
    Layout: RootLayout,
  },
  {
    path: "/about",
    Component: AboutPage,
    Layout: RootLayout,
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              Layout ? (
                <Layout>
                  <Component />
                </Layout>
              ) : (
                <Component />
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
