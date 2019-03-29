import { css, cx } from "emotion";
import {
  unstable_ButtonProps,
  unstable_ButtonOptions
} from "reakit/Button/Button";
import { useBox } from "reakit-system-palette/system/useBox";
import { useDarken } from "reakit-system-palette/utils/useDarken";
import { useFade } from "reakit-system-palette/utils/useFade";
import { BootstrapBoxOptions } from "./useBox";

export type BootstrapButtonOptions = BootstrapBoxOptions &
  unstable_ButtonOptions;

export function useButton(
  {
    unstable_system: { opaque = true, palette = "primary", ...system } = {}
  }: BootstrapButtonOptions,
  { className, ...htmlProps }: unstable_ButtonProps = {}
) {
  const {
    style: { color, backgroundColor, borderColor = "transparent" }
  } = useBox({ unstable_system: { opaque, palette, ...system } });

  // box without palette -> button with palette primary -> box with palette primary
  // that's why box with palette primary is added after button with palette primary
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
          (opaque ? backgroundColor : color) || "#aaa",
          0.2
        ),
        backgroundColor: useDarken(backgroundColor || "white", 0.1)
      },
      "&:active": {
        borderColor: useDarken(
          (opaque ? backgroundColor : color) || "#aaa",
          0.3
        ),
        backgroundColor: useDarken(backgroundColor || "white", 0.2)
      },
      "&:focus": {
        outline: 0,
        boxShadow: `0 0 0 0.2em
        ${useFade((opaque ? backgroundColor : color) || "#aaa", 0.5)}`
      }
    },
    color && { color },
    backgroundColor && { backgroundColor }
  );

  return { ...htmlProps, className: cx(className, button) };
}
