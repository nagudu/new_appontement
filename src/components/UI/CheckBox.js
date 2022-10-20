import React from "react";
import { Input } from "reactstrap";
// import { themeClass } from "variables";

function Checkbox(props) {
  const {
    container = "",
    label = "",
    key = "1",
    checked = false,
    onChange = (f) => f,
    mb=''
  } = props;

  return (
    <div className={`custom-control custom-checkbox ${mb?mb:"mb-3"} ${container}`}>
      <Input
        className="custom-control-input"
        id={`${props.label}${props.name}-${key}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label
        className="custom-control-label"
        htmlFor={`${props.label}${props.name}-${key}`}
      >
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
