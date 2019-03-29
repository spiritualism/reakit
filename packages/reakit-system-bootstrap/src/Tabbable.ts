import { css, cx } from "emotion";
import {
  unstable_TabbableProps,
  unstable_TabbableOptions
} from "reakit/Tabbable/Tabbable";
import { useFade } from "reakit-system-palette/utils/useFade";
import { useBoxProps as usePaletteBoxProps } from "reakit-system-palette/Box";
import { BootstrapBoxOptions } from "./Box";

export type BootstrapTabbableOptions = BootstrapBoxOptions &
  unstable_TabbableOptions;

export function useTabbableOptions({
  unstable_system: { palette = "dark", ...system } = {},
  ...options
}: BootstrapTabbableOptions) {
  return {
    unstable_system: { palette, ...system },
    ...options
  };
}

export function useTabbableProps(
  { unstable_system: system = {} }: BootstrapTabbableOptions,
  { className, ...htmlProps }: unstable_TabbableProps = {}
) {
  const {
    style: { color, backgroundColor }
  } = usePaletteBoxProps({ unstable_system: system });

  const boxShadowColor = useFade(
    (system.opaque ? backgroundColor : color) || "#aaa",
    0.5
  );

  const tabbable = css({
    transition: "box-shadow 0.15s ease-in-out",
    "&:focus": {
      outline: 0,
      boxShadow: `0 0 0 0.2em ${boxShadowColor}`
    }
  });

  return { ...htmlProps, className: cx(className, tabbable) };
}
