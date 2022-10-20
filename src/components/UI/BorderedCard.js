import classNames from "classnames";
import React from "react";
import { Card } from "reactstrap";
import { primaryColor } from "../../variables";
// import { themeClass } from "variables";

function BorderedCard(props) {
  return (
    <Card
      // className={classNames([ props.className])}
       
      // outline
      // style={{color:primaryColor}}
    >
      {props.children}
    </Card>
  );
}

export default BorderedCard;