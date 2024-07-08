import { FC, JSX } from "react";
import { Routes, Route } from "react-router-dom";
import { sidePanelRoutes } from "@/data";

const Router: FC = (): JSX.Element => {
  return (
    <Routes>
      {sidePanelRoutes?.map((sideBarOption) => (
        <Route
          key={sideBarOption.id}
          path={sideBarOption.path}
          element={sideBarOption?.element ?? <div></div>}
        />
      ))}
    </Routes>
  );
};

export { Router };
