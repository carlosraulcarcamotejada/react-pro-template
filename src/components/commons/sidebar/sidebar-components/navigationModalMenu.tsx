import { FC, Fragment, JSX } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui";
import { Menu } from "lucide-react";
import { sidePanelRoutes } from "@/data";
import { SideNavOption } from ".";

const NavigationModalMenu: FC = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="text-black h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>React Pro</SheetTitle>
          <SheetDescription>
            This is a template for the course from Fernando Herrrera (React Pro)
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
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
      </SheetContent>
    </Sheet>
  );
};

export { NavigationModalMenu };
