import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import WithFooterLayout from "./components/WithFooterLayout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AnalysePage from "./pages/AnalysePage";
import ResultatPage from "./pages/ResultatPage";
import PartagePage from "./pages/PartagePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // Pages sans footer
      { index: true, Component: HomePage },
      { path: "partage", Component: PartagePage },
      { path: "analyse", Component: AnalysePage },
      { path: "resultat", Component: ResultatPage },
      // Pages avec footer
      {
        Component: WithFooterLayout,
        children: [
          { path: "dashboard", Component: DashboardPage },
        ],
      },
    ],
  },
]);