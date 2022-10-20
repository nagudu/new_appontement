import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { themeClass } from "../../variables";

function SelectInput(props) {
    const { label, options, className, container, required } = props;
    return (
        <FormGroup className={container}>
            {label && label !== "" ? (
                <>
                    <Label className="font-weight-bold"  style={{fontSize:20}}>{label}</Label>
                    {required && <span className="text-danger">*</span>}
                </>
            ) : null}
            <Input
                type="select"
                className={`form-control-alternative border border-${themeClass}  ${className}`}
                // style={{border:"#1FE682"}}
                {...props}
            >
                <option>--select--</option>
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );
}

export default SelectInput;
