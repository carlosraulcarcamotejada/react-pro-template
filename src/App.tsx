import { FC, JSX } from "react";
import { Footer, Sidebar } from "@/components/commons";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Footer />
    </>
  );
};

export { App };
