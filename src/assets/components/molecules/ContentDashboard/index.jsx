import React from "react";
import { Button } from "../../atoms";
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
  href,
}) {
  if (showComment) {
    return <AllComment nameComment={nameComment} descComment={descComment} />;
  }
  const Detail = ({ href }) => {
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
          {countComment}
          <Button
            style={{ textDecoration: "none" }}
            type="link"
            href={href}
            className="float-end me-5"
          >
            Detail
          </Button>
        </p>
      </>
    );
  };
  return (
    <div className="row mt-4">
      <div className="col-lg-2">
        <p className="fw-bold">{name}</p>
      </div>
      <div className="col-lg-10">
        <p className={className}>{desc}</p>
        <div className="col-lg-4 col-sm-4">
          <Detail href={href} />
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;
