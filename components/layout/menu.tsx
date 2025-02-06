import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function MenuCustomList({ title, menuItems }: { title: string, menuItems: string[] }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <div className="w-full hidden lg:flex">
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
          <MenuHandler>
            <Button
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              variant="text"
              className="flex items-center gap-3 text-xl font-normal capitalize tracking-normal"
            >
              {title}{" "}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                  }`}
              />
            </Button>
          </MenuHandler>
          <MenuList
            placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
            className="hidden gap-3 overflow-visible lg:grid">
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {menuItems.map((title) => (
                <a href="#" key={title}>
                  <MenuItem
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    <Typography
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                      variant="h6" color="blue-gray" className="mb-1 text-xl">
                      {title}
                    </Typography>
                  </MenuItem>
                </a>
              ))}
            </ul>
          </MenuList>
        </Menu>
      </div>

      <ul className="flex flex-col items-start lg:hidden relative">


        <li className="font-bold text-2xl w-full">
          {title}
        </li>
        <li className="w-full">
          <ul className="w-full pl-6">
            {menuItems.map(item => (
              <li key={item} className="text-xl w-full">{item}</li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}