import React from "react";
import { Spinner } from "reactstrap";

export default function Loading({ size = "md" }) {
  return (
    <div className="d-flex flex-direction-row align-items-center justify-content-center">
      <Spinner size={size} className="mr-3" />
      Please wait...
    </div>
  );
}
