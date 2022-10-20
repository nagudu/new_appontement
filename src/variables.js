export const primaryColor = "#00c6ff";
export const primaryText = "#00c6ff";
export const secondaryColor = "#DDFFDD";

export const themeClass = "bg-primary-custom-custom";
export const themePaper = "bg-light text-dark";
// export const themeClass = "bg-default text-dark";
// export const themeClass = "bg-default text-primary";
// export const themeClass = "bg-secondary text-dark";

export const serverUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:48322"
    : "https://yge.wvi.mybluehost.me/test/coop-soc-backend";
export const apiURL = serverUrl + "/api";

export const getNotificationOptions = (message = "", type = "success") => ({
  place: "tc",
  message: (
    <div>
      <div>{message}</div>
    </div>
  ),
  type,
  icon: "nc-icon nc-bell-55",
  autoDismiss: 7,
});

const colors = {
  primary: {
    backgroundColor: "#600EE6",
    color: "#600EE6",
    // color: '#010101',
    border: "#3931af",
    paper: "#f8f9fa",
    btn: "#00c6ff",
  },
  secondary: {
    backgroundColor: "#00c6ff",
    color: "#fff",
    border: "#3931af",
    paper: "#f8f9fa",
    btn: "00c6ff",
  },
  tertiary: {
    backgroundColor: "#00c6ff",
    color: "#fff",
    border: "#3931af",
    paper: "#f8f9fa",
    btn: "00c6ff",
  },
};

// export const CURRENCY = '₦'
export const CURRENCY = "NGN";

export const toastProp = {
  success: {
    appearance: "success",
    autoDismiss: true,
  },
  error: {
    appearance: "success",
    autoDismiss: true,
  },
};

export const theme = {
  primary: {
    main: {
      backgroundColor: colors.primary.backgroundColor,
      color: colors.primary.color,
      border: colors.primary.border,
    },
    paper: {
      backgroundColor: colors.primary.paper,
      color: colors.primary.paper,
      // border:''
    },
    btn: {
      backgroundColor: colors.primary.color,
      color: "",
      borderColor: "#00c6ff",
    },
  },
  secondary: {
    main: {
      backgroundColor: "#3931af",
      color: "",
      border: "",
    },
    paper: {
      backgroundColor: "",
      color: "",
      // border:''
    },
    btn: {
      backgroundColor: "",
      color: "",
      border: "",
    },
  },
};
export const NAIRA = "₦";
// #c9d1d4
