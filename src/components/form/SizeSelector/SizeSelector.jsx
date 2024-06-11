import React from "react";
import LabelText from "../LabelText/LabelText";
import "./SizeSelector.scss";
import { Dropdown } from "react-bootstrap";

const SizeSelector = ({ label, id, onChange, placeholder, value, error }) => {
  return (
    <div id="size-selector-container">
      <LabelText label={label} />
      <div className="select-size-input">
        <div className="size-select">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <i className="bi bi-chevron-down text-12-500 ms-1" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="" className="d-flex align-items-center">
                sm
              </Dropdown.Item>
              <Dropdown.Item href="" className="d-flex align-items-center">
                md
              </Dropdown.Item>
              <Dropdown.Item href="" className="d-flex align-items-center">
                lg
              </Dropdown.Item>
              <Dropdown.Item href="" className="d-flex align-items-center">
                xl
              </Dropdown.Item>
              <Dropdown.Item href="" className="d-flex align-items-center">
                xxl
              </Dropdown.Item>
              <Dropdown.Item href="" className="d-flex align-items-center">
                xxxl
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="saprator-block" />
        <div className="size-input-block">
          <input
            id={id}
            onChange={onChange}
            type="text"
            placeholder={placeholder}
            className="text-input text-15-500 color-black-100"
            value={value}
          />
        </div>
        {error && (
          <span className="text-13-500 pt-1">
            <span style={{ color: "red" }}>{error}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default SizeSelector;
