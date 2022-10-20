import React, { useState } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineUp } from "react-icons/ai";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { primaryColor, theme, themePaper } from "../../variables";
import BackButton from "./BackButton";

function CustomCard(props) {
  const { header, footer, back, headerRight } = props;

  return (
    <Card>
      {header && (
        <CardHeader
          // className={`py-2`}
          style={{
            borderBottom: `1px solid ${primaryColor}`,
            // color: "white",
            padding: "0",
            // backgroundColor:'gray',
          }}
          className={back ? "row m-0 align-items-center" : ""}
          tag="h2"
        >
          {back && (
            <div className="col-md-3">
              <BackButton text="Go Back" />
            </div>
          )}
          <p className={back ? "col-md-6 text-center" : "text-center"}>
            {header}
          </p>
          {/* <div className={back ? 'col-md-6' : ''}>{header}</div> */}
          {headerRight && <div className="col-md-3">{headerRight}</div>}
        </CardHeader>
      )}
      <CardBody
        className={themePaper}
        style={{ backgroundColor: "white !important" }}
      >
        {props.children}
      </CardBody>
      {footer && (
        <CardFooter
          style={{
            borderBottom: `1px solid ${primaryColor}`,
            color: "white",
          }}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export const CustomCotrolCard = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <Card>
      <div
        style={{
          backgroundColor: theme.primary.main.backgroundColor,
          color: theme.primary.paper.backgroundColor,
          cursor: "pointer",
        }}
        className="d-flex justify-content-between card-header  p-3"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <h6 className="font-weight-bold">{props.title?props.title:""}</h6>
        {toggle ? <AiOutlineDown size={20} /> : <AiOutlineLeft size={20} />}
      </div>
      {toggle ? props.children : null}
    </Card>
  );
};

export default CustomCard;
