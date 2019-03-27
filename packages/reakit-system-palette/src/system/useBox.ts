import { unstable_BoxProps } from "reakit/Box/Box";
import { mergeProps } from "reakit/utils/mergeProps";
import { usePalette } from "../utils/usePalette";

export type UseBoxOptions = {
  system: {
    color?: string;
    bgColor?: string;
  };
};

export function useBox(
  { system = {} }: UseBoxOptions,
  htmlProps: unstable_BoxProps = {}
) {
  const text = usePalette(system.color);
  const bg = usePalette(system.bgColor);
  const color = text.color || bg.contrast;
  const backgroundColor = bg.color || text.contrast;
  const style = {
    ...(color ? { color } : {}),
    ...(backgroundColor ? { backgroundColor } : {})
  };
  return mergeProps({ style }, htmlProps);
}
