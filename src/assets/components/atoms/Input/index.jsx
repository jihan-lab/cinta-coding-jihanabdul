import React from "react";
import Search from "./seacrh";

function Input({ placeholder, type, search, value, onChange }) {
  if (search) {
    return <Search placeholder={placeholder} type={type} />;
  }
  return (
    <>
      <div className="mb-3">
        <input
          onChange={onChange}
          value={value}
          type={type}
          className="form-control text-center mb-3"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Input;
