import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { primaryColor } from "../../../variables";

function HorizontalMenu(props) {
  const location = useLocation();
  const active = location.pathname.includes(props.route);
  const _active = props.active ? props : active;
  const navigate = useNavigate();
  return (
    <div
      {...props}
      onClick={() => navigate(props.route)}
      className="list-group-item list-group-item-action"
      style={
        _active
          ? {
              border: `1px solid`,
              backgroundColor: "#ECF8E5",
              borderLeft: `7px solid ${primaryColor}`,cursor: "pointer"
            }
          : { border: `1px solid`,cursor: "pointer" }
      }
    >
      {props.children}
    </div>
  );
}

export default HorizontalMenu;
