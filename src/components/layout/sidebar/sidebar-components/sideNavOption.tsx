import { FC, JSX } from "react";
import { Badge } from "@/components/ui";
import { RoutesProps } from "@/data";
import { NavLink } from "react-router-dom";

const SideNavOption: FC<RoutesProps> = ({ name, path, badge }): JSX.Element => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `
        ${isActive ? "bg-gray-100" : ""}
        flex 
        items-center 
        p-2 text-gray-900
        rounded-lg
        dark:text-white
        hover:bg-gray-100 
        dark:hover:bg-gray-700 
        group
        transition-all
        duration-150
        `}
    >
      <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
      {badge && (
        <Badge variant={badge?.variant ?? "default"}>{badge.label}</Badge>
      )}
    </NavLink>
  );
};

export { SideNavOption };
