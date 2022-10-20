import React from "react";
import { Button } from "reactstrap";
import { primaryColor, theme } from "../../variables";
import { themeClass } from "../../variables";

function CustomButton(props) {
  return (
    <Button
      disabled={props.loading || props.disabled}
      style={
        props.color
          ? { borderWidth: "1px" }
          : {
              background: props.outline
                ? "inherit"
                : props.background || theme.primary.main.backgroundColor,
              color: props.outline
                ? theme.primary.main.backgroundColor
                : "white",
              border: props.outline
                ? `1px solid ${theme.primary.main.backgroundColor}`
                : "none",
              margin: 2,
            }
      }
      color={props.color || themeClass}
      {...props}
      size={props.size || "md"}
    >
      {props.loading && (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.children}
    </Button>
  );
}

export default CustomButton;
