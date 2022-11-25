import React from "react";

function AllComment({ nameComment, descComment }) {
  return (
    <>
      <div className="row mb-2 d-flex justify-content-end">
        <div className="col col-11">
          <div className="row">
            <div className="col-lg-1">
              <p className="fw-bold">{nameComment}</p>
            </div>
            <div className="col-lg-11">
              <p className="text-secondary ms-2">{descComment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllComment;
