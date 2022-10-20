import classNames from "classnames";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { primaryColor } from "../../../variables";

const TabBar = ({ items = [], current = "", onItemClick = (f) => f }) => {
  return (
    <Nav
      className="nav-fill flex-row flex-sm-row"
      id="tabs-text"
      pills
      role="tablist"
      // style={{background:"#1FE682"}}
    >
      {items.map((_item, index) => (
        <NavItem>
          <NavLink
            aria-selected={index === current}
            className={classNames("mb-sm-3 mb-sm-0 m-1", {
              active: index === current,
            })}
            style={{ background:index === current ?  primaryColor : '#ECF8E5', color:  index === current ? "white" : "black"}}
            onClick={() => onItemClick(index)}
            // onClick={e => this.toggleNavs(e, "navPills", 1)}
            href="#"
            role="tab"
            key={index}
          >
            {_item}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TabBar;
