import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
 
export function MenuCustomList({title,menuItems}:{title:string,menuItems:string[]}) {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-xl font-normal capitalize tracking-normal"
        >
          {title}{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden gap-3 overflow-visible lg:grid">
        
        
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(( title ) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1 text-xl">
                  {title}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}