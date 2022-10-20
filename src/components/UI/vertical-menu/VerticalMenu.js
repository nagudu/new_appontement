// import { ChevronDownIcon, ChevronLeftIcon, Icon } from "evergreen-ui";
import React from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";

function VerticalMenu(props) {
  return (
    <div className="list-group">
      {props.title ? (
        <span
          className="font-weight-bold text-white "
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            padding: '5px 15px'
          }}
          onClick={() => props.onClick()}
          onClose={() => !props.onClick()}
        >
          <span>{props.title}</span>
          <span>
            {props.isOpen ? (
              <FaChevronUp size={20} />
            ) : (
              <FaChevronDown size={20} />
            )}
          </span>
        </span>
      ) : null}
      {props.children}
    </div>
  );
}

export default VerticalMenu;
