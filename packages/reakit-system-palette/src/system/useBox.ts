import { unstable_BoxOptions, unstable_BoxProps } from "reakit/Box/Box";
import { mergeProps } from "reakit/utils/mergeProps";
import { usePalette } from "../utils/usePalette";
import { useContrast } from "../utils";

export type PaletteBoxOptions = unstable_BoxOptions & {
  unstable_system: {
    palette?: string;
    opaque?: boolean;
    outline?: boolean;
  };
};

export function useBox(
  { unstable_system: system = {} }: PaletteBoxOptions,
  htmlProps: unstable_BoxProps = {}
) {
  const color = usePalette(system.palette);
  const contrast = useContrast(color);
  const textColor = system.opaque ? contrast : color;
  const backgroundColor = system.opaque ? color : undefined;
  const borderColor = system.outline ? color : undefined;

  const style = {
    ...(textColor ? { color: textColor } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(borderColor ? { border: `1px solid ${borderColor}`, borderColor } : {})
  };

  return mergeProps({ style }, htmlProps);
}
