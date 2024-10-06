"use client";

import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/components";

export const ThemeSwitcher = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
      <p className="text-default-500 select-none">Lights: {isSelected ? "on" : "off"}</p>
    </div>
  );
};
