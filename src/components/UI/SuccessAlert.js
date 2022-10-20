import React from "react";
import { ThumbsUp } from "react-feather";
import { theme } from "variables";
import ModalNotification from "./ModalNotification";

export default function SuccessAlert({
  successLoading,
  message,
  toggle = (f) => f,
  confirm = () => f,
  confirmText,
}) {
  return (
    <div>
      {" "}
      <ModalNotification
        isOpen={successLoading}
        headerText="Success"
        confirm={confirm}
        toggle={toggle}
        confirmText={confirmText}
      >
        <ThumbsUp color={theme.primary.main.backgroundColor} size={70} />
        <h4>{message}</h4>
      </ModalNotification>
    </div>
  );
}

