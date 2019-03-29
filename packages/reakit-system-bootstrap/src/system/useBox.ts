import { unstable_BoxProps } from "reakit/Box/Box";
import {
  PaletteBoxOptions,
  useBox as usePaletteBox
} from "reakit-system-palette/system/useBox";
import { mergeProps } from "reakit/utils/mergeProps";
import { useStyle } from "../utils/useStyle";

export type BootstrapBoxOptions = PaletteBoxOptions & {
  unstable_system: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };
};

export function useBox(
  { unstable_system = {} }: BootstrapBoxOptions,
  htmlProps: unstable_BoxProps = {}
) {
  const {
    style: { color, backgroundColor, border }
  } = usePaletteBox({ unstable_system });
  const className = useStyle`
    margin: unset;
    padding: unset;
    border: unset;
    background: unset;
    font: unset;
    font-family: inherit;
    font-size: 100%;
    box-sizing: border-box;
    ${color && `color: ${color};`}
    ${backgroundColor && `background-color: ${backgroundColor};`}
    ${border && `border: ${border};`}
  `;
  return mergeProps({ className }, htmlProps);
}
