import { FC, JSX, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "@/data";

const Router: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes?.map(({ id, path, element: Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { Router };
