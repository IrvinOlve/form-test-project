import React from "react";
import { Form } from "react-bootstrap";
import { StyledInput, StyledSelect } from "./styles";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  displayLabel = true,
  required = false,
  type,
  options = [],
  ...props
}) => {
  const { register, watch } = useFormContext();
  const fieldName = name.toLowerCase().replace(" ", "_");

  const typePattern = (type) => {
    switch (type) {
      case "text":
        return {
          value: /^[a-zA-Z ]+$/,
          message: "Please enter only alphabetical letters.",
        };
      case "alphanumeric":
        return {
          value: /^[a-zA-Z0-9 ]+$/,
          message: "Please enter only alphanumeric values.",
        };
      case "email":
        return {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email.",
        };
      case "number":
        return {
          value: /^[0-9 ]+$/,
          message: "Please enter only numerical letters.",
        };
    }
  };

  const inputProps = {
    ...register(fieldName, {
      required: required && "This field is required... ",
      pattern: { ...typePattern(type) },
    }),
  };

  const InputSelector = ({ type }) => {
    switch (type) {
      case "select":
        return (
          
          <StyledSelect>
            {options.map((value, key) => (
              <option key={key}>{value}</option>
            ))}
          </StyledSelect>
        );
      default:
        return <StyledInput {...inputProps} type={type} id={fieldName} />;
    }
  };

  return (
    <>
      <Form.Label htmlFor={fieldName}>
        {displayLabel && name && name}
      </Form.Label>
      <InputSelector type={type} />
    </>
  );
};

export default Input;
