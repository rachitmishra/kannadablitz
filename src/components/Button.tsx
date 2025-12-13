import React from "react";

type ButtonVariant = "primary" | "surface" | "danger" | "neutral";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = `btn--${variant}`;
  const fullWidthClasses = fullWidth ? "btn--full" : "";

  const classes = [baseClasses, variantClasses, fullWidthClasses, className]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} type="button" />;
}
