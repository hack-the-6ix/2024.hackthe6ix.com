import { CSSProperties, ComponentProps, ElementType } from "react";
import cn from "classnames";
import { Spacing } from "@/styles";
import styles from "./Flex.module.scss";

export type FlexProps<T extends ElementType> = {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: Spacing;
  inline?: boolean;
  as?: T;
} & ComponentProps<T>;

function Flex<T extends ElementType = "div">({
  direction,
  justify,
  align,
  gap,
  inline,
  as,
  ...props
}: FlexProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      {...props}
      className={cn(
        inline ? styles["flex-inline"] : styles.flex,
        direction && styles[`direction--${direction}`],
        justify && styles[`justify--${justify}`],
        align && styles[`align--${align}`],
        gap && styles[`gap--${gap}`],
        props.className
      )}
    />
  );
}

export default Flex;
