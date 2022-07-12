import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "../heroes/routes/PrivateRoutes";
import { PublicRoutes } from "../heroes/routes/PublicRoutes";

import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />
        {/* <Route path="login" element={<LoginPage />}></Route> */}
        {/* <Route path="/*" element={<HeroesRoutes />}></Route> */}
      </Routes>
    </>
  );
};
