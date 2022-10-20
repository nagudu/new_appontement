// import React from 'react'
import { useToasts } from "react-toast-notifications";
// import { toastProp } from "variables";

export default function _alert(content, color) {
    const { addToast } = useToasts();
    addToast(content, {
        appearance: color,
        autoDismiss: true
    });
}
