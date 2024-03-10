import { ComponentProps, ElementType } from "react";
import cn from "classnames";
import { ColorTypes } from "@/styles";
import styles from "./Button.module.scss";

export type ButtonProps<T extends ElementType> = {
  buttonType?: "primary" | "secondary" | "tertiary";
  buttonColor?: ColorTypes;
  as?: T;
} & ComponentProps<T>;

function Button<T extends ElementType = "button">({
  buttonColor = "neutral-500",
  buttonType = "primary",
  as,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";
  return (
    <Component
      type="button"
      {...props}
      className={cn(
        props.disabled && styles.disabled,
        styles[`type--${buttonType}`],
        styles.button,
        props.className
      )}
      style={{
        ...props.style,
        "--button-color": `--${buttonColor}-600`,
        "--button-color-hover": `--${buttonColor}-700`,
        "--button-color-active": `--${buttonColor}-800`,
      }}
    />
  );
}
