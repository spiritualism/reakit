import {
  unstable_ButtonProps,
  unstable_ButtonOptions
} from "reakit/Button/Button";
import { mergeProps } from "reakit/utils/mergeProps";
import { useBox } from "reakit-system-palette/system/useBox";
import { useDarken } from "reakit-system-palette/utils/useDarken";
import { useFade } from "reakit-system-palette/utils/useFade";
import { useStyle } from "../utils/useStyle";
import { BootstrapBoxOptions } from "./useBox";

export type BootstrapButtonOptions = BootstrapBoxOptions &
  unstable_ButtonOptions;

export function useButton(
  {
    unstable_system: { opaque = true, palette = "primary", ...system } = {}
  }: BootstrapButtonOptions,
  htmlProps: unstable_ButtonProps = {}
) {
  const {
    style: { color, backgroundColor, borderColor = "transparent" }
  } = useBox({ unstable_system: { opaque, palette, ...system } });

  const className = useStyle`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    padding: 0.375em 0.75em;
    line-height: 1.5;
    border-radius: 0.25em;
    border: 1px solid ${borderColor};
    transition: color 0.15s ease-in-out, 
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    ${color && `color: ${color};`}
    ${backgroundColor && `background-color: ${backgroundColor};`}

    &:hover {
      border-color: ${useDarken(
        (opaque ? backgroundColor : color) || "#aaa",
        0.2
      )};
      background-color: ${useDarken(backgroundColor || "white", 0.1)};
    }

    &:active {
      border-color: ${useDarken(
        (opaque ? backgroundColor : color) || "#aaa",
        0.3
      )};
      background-color: ${useDarken(backgroundColor || "white", 0.2)};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2em ${useFade(
        (opaque ? backgroundColor : color) || "#aaa",
        0.5
      )}
    }
  `;

  return mergeProps({ className }, htmlProps);
}
