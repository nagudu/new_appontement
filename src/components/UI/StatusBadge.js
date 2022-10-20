import React from "react";
import { Badge } from "reactstrap";

function StatusBadge({ status = "" }) {
  const getColor = (status) => {
    switch (status) {
      case "success":
        return "success";
      case "approved":
        return "success";
      case "disbursed":
        return "info";
      case "pending":
        return "warning";
      case "failed":
        return "danger";
      case "rejected":
        return "danger";
      case "guarantor_pending":
        return "danger";
      default:
        return "";
    }
  };

  return <Badge color={getColor(status.toLowerCase())}>{status}</Badge>;
}

export default StatusBadge;
