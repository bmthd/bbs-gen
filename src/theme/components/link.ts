import { Link as TSRLink } from "@tanstack/react-router";
import type { ComponentStyle, LinkProps } from "@yamada-ui/react";

/** Linkコンポーネントの共通設定 */
export const Link: ComponentStyle<"Link", LinkProps> = {
  defaultProps: {
    as: TSRLink,
  },
};
