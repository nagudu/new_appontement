import React from "react";
import { Table } from "reactstrap";
import { checkStrEmpty } from "../../utils/index";

function CustomTable(props) {
  const {
    fields = [],
    data = [],
    className = "",
    styles = {},
    total = [],
    rowStyle = () => {},
  } = props;
  return (
    <Table className={className} {...props} bordered responsive striped  hover>
      <thead style={styles}>
        <tr>
          {fields.map((_item, _idx) => {
            if (_item.hidden) {
              return null;
            } else {
              return (
                <th key={_idx} scope="row" style={{ textAlign: "center" }}>
                  {_item.title}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, idx) => (
            <tr key={idx} style={{ ...styles, ...rowStyle(item) }}>
              {fields.map((_item, _idx) => {
                let val = item[_item.value] || "";
                let value_alt =
                  (_item.value_alt && item[_item.value_alt]) || "";
                if (_item.hidden) {
                  return null;
                } else if (_item.custom) {
                  return (
                    <td key={_idx} className={_item.className}>
                      {_item.component(item, idx)}
                    </td>
                  );
                } else {
                  return (
                    <td key={_idx} className={_item.className}>
                      {checkStrEmpty(val) ? value_alt : val}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
      </tbody>
      {total && total.length
        ? fields.map((_item, _idx) => (
            <th key={_idx} className="text-right">
              {total[_idx]}
            </th>
          ))
        : null}
    </Table>
  );
}

export default CustomTable;
