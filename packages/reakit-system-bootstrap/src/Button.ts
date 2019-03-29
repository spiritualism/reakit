import { css, cx } from "emotion";
import {
  unstable_ButtonProps,
  unstable_ButtonOptions
} from "reakit/Button/Button";
import { useBoxProps } from "reakit-system-palette/Box";
import { useDarken } from "reakit-system-palette/utils/useDarken";
import { BootstrapBoxOptions } from "./Box";

export type BootstrapButtonOptions = BootstrapBoxOptions &
  unstable_ButtonOptions;

export function useButtonOptions({
  unstable_system: { opaque = true, palette = "primary", ...system } = {},
  ...options
}: BootstrapButtonOptions) {
  return { unstable_system: { opaque, palette, ...system }, ...options };
}

export function useButtonProps(
  { unstable_system: system = {} }: BootstrapButtonOptions,
  { className, ...htmlProps }: unstable_ButtonProps = {}
) {
  const {
    style: { color, backgroundColor, borderColor = "transparent" }
  } = useBoxProps({ unstable_system: system });

  const button = css(
    {
      display: "inline-block",
      fontWeight: 400,
      textAlign: "center",
      verticalAlign: "middle",
      userSelect: "none",
      padding: "0.375em 0.75em",
      lineHeight: 1.5,
      borderRadius: "0.25em",
      border: `1px solid ${borderColor}`,
      transition:
        "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "&:hover": {
        borderColor: useDarken(
          (system.opaque ? backgroundColor : color) || "#aaa",
          0.2
        ),
        backgroundColor: useDarken(backgroundColor || "white", 0.1)
      },
      "&:active": {
        borderColor: useDarken(
          (system.opaque ? backgroundColor : color) || "#aaa",
          0.3
        ),
        backgroundColor: useDarken(backgroundColor || "white", 0.2)
      }
    },
    color && { color },
    backgroundColor && { backgroundColor }
  );

  return { ...htmlProps, className: cx(className, button) };
}
