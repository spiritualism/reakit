import { unstable_createComponent } from "../utils/createComponent";
import { mergeProps } from "../utils/mergeProps";
import { unstable_useProps } from "../system/useProps";
import { unstable_BoxOptions, unstable_BoxProps, useBox } from "../Box/Box";
import { Keys } from "../__utils/types";

export type unstable_SeparatorOptions = unstable_BoxOptions & {
  /**
   * Separator's context orientation.
   * The actual separator's oriention will be flipped based on this prop.
   * So a `"vertical"` orientation means that the separator will have a
   * `"horizontal"` orientation.
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
};

export type unstable_SeparatorProps = unstable_BoxProps;

export function useSeparator(
  { orientation = "vertical", ...options }: unstable_SeparatorOptions = {},
  htmlProps: unstable_SeparatorProps = {}
) {
  const flipMap = {
    horizontal: "vertical",
    vertical: "horizontal"
  };

  htmlProps = mergeProps(
    {
      role: "separator",
      "aria-orientation": flipMap[orientation]
    } as typeof htmlProps,
    htmlProps
  );
  htmlProps = useBox(options, htmlProps);
  htmlProps = unstable_useProps("useSeparator", options, htmlProps);
  return htmlProps;
}

const keys: Keys<unstable_SeparatorOptions> = [...useBox.__keys, "orientation"];

useSeparator.__keys = keys;

export const Separator = unstable_createComponent({
  as: "hr",
  useHook: useSeparator
});
