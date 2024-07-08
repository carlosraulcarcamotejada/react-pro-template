import { FC, Fragment, JSX } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactLogo } from "@/components/svg";
import { sidePanelRoutes } from "@/data";
import {
  AvatarModalMenu,
  NavigationModalMenu,
  SideNavOption,
} from "./sidebar-components";
import { Router } from "@/components/router";
import { Label } from "@/components/ui";

const Sidebar: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <NavigationModalMenu />

              <ReactLogo className="h-8 w-8 me-3 ml-4 text-[#00D8FF]" />

              <Label className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                React Pro
              </Label>
            </div>

            <AvatarModalMenu />
          </div>
        </div>
      </nav>

      {/* SideNav Desktop */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidePanelRoutes?.map((sideBarOption) => (
              <Fragment key={sideBarOption.id}>
                {sideBarOption?.displayedRoute && (
                  <li>
                    <SideNavOption {...sideBarOption} />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </aside>

      {/* Page Content */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border min-h-svh border-gray-200  rounded-lg dark:border-gray-700 mt-14">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
};

export { Sidebar };
