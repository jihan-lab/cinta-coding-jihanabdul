import React from "react";

function Search({ placeholder, type }) {
  return (
    <>
      <div className="mb-3 mt-3">
        <input
          type={type}
          className="form-control text-center mb-3 input-search ps-5"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Search;
