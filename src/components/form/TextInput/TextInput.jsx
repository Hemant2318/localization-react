import React from "react";
import LabelText from "../LabelText";
import "./TextInput.scss";
import { icons } from "utils/constants";

const TextInput = ({
  placeholder,
  label,
  id,
  onChange,
  onClick,
  value,
  error,
  disabled,
  isRightArrow,
}) => {
  return (
    <div id="text-input-container">
      <LabelText label={label} />
      <div>
        <input
          id={id}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          className="text-input text-15-500 color-black-100"
          value={value}
          disabled={disabled}
          autoComplete="off"
          onClick={onClick}
        />

        {isRightArrow && (
          <i
            className="right-icon-block bi bi-chevron-right pointer"
            onClick={onClick}
          />
        )}

        {error && (
          <span className="text-13-500 pt-1">
            <span style={{ color: "red" }}>{error}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
