import React from "react";
import AllComment from "./allComment";

function ContentDashboard({
  name,
  desc,
  noDetail,
  countComment,
  className,
  noComment,
  showComment,
  nameComment,
  descComment,
}) {
  if (showComment) {
    return <AllComment nameComment={nameComment} descComment={descComment} />;
  }
  const Detail = () => {
    if (noDetail) {
      return (
        <>
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <p className="d-inline ms-2 text-primary">{countComment}</p>
        </>
      );
    }
    if (noComment) {
      return <></>;
    }
    return (
      <>
        <i className="fa fa-comment-o" aria-hidden="true"></i>
        <p className="d-inline ms-2 text-primary">
          {countComment} <span className="float-end me-5">Detail</span>
        </p>
      </>
    );
  };
  return (
    <div className="row mt-4">
      <div className="col-lg-1">
        <p className="fw-bold">{name}</p>
      </div>
      <div className="col-lg-11">
        <p className={className}>{desc}</p>
        <div className="col-lg-4 col-sm-4">
          <Detail />
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;
