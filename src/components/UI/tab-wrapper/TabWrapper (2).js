import React, { useState } from "react";
import { themeClass } from "variables";
import TabBar from "./TabBar";

function TabWrapper(props) {
  const { steps = [], barWidth = "20vw", outline = false } = props;
  const [step, setStep] = useState(0);

  return (
    <div
      className={`${
        outline ? " rounded" : ""
      } ${themeClass}`}
    >
      {/* <CardHeader className={+ themeClass + "m-0 p-0" }> */}
      <center>
        <TabBar
          barWidth={barWidth}
          current={step}
          items={steps}
          onItemClick={(i) => setStep(i)}
        />
      </center>
      {/* </CardHeader> */}
      {/* <CardBody>{props.children.filter((item, i) => step === i)}</CardBody> */}
      <div className="mt-2">
        {props.children.filter((item, i) => step === i)}
      </div>
    </div>
  );
}

export default TabWrapper;
