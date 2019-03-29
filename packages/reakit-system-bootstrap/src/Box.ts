import { css, cx } from "emotion";
import { unstable_BoxProps } from "reakit/Box/Box";
import {
  PaletteBoxOptions,
  useBoxProps as usePaletteBoxProps
} from "reakit-system-palette/Box";

export type BootstrapBoxOptions = PaletteBoxOptions & {
  unstable_system: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  };
};

export function useBoxProps(
  { unstable_system = {} }: BootstrapBoxOptions,
  { className, ...htmlProps }: unstable_BoxProps = {}
) {
  const { style } = usePaletteBoxProps({ unstable_system });

  const box = css(
    {
      margin: "unset",
      padding: "unset",
      border: "unset",
      background: "unset",
      font: "unset",
      fontFamily: "inherit",
      fontSize: "100%",
      boxSizing: "border-box"
    },
    style as any
  );

  return { ...htmlProps, className: cx(className, box) };
}
