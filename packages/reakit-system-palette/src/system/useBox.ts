import { unstable_BoxProps } from "reakit/Box/Box";
import { mergeProps } from "reakit/utils/mergeProps";
import { usePalette } from "../utils/usePalette";

type SystemBoxOptions = {
  unstable_system: {
    palette?: string;
    opaque?: boolean;
  };
};

export function useBox(
  { unstable_system: system = {} }: SystemBoxOptions,
  htmlProps: unstable_BoxProps = {}
) {
  const palette = usePalette(system.palette);
  const color = system.opaque ? palette.contrast : palette.color;
  const backgroundColor = system.opaque ? palette.color : undefined;
  const style = {
    ...(color ? { color } : {}),
    ...(backgroundColor ? { backgroundColor } : {})
  };
  return mergeProps({ style }, htmlProps);
}
