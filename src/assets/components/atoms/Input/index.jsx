import React from "react";
import Search from "./seacrh";

function Input({ placeholder, type, search }) {
  if (search) {
    return <Search placeholder={placeholder} type={type} />;
  }
  return (
    <>
      <div className="mb-3">
        <input
          type={type}
          className="form-control text-center mb-3"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Input;
