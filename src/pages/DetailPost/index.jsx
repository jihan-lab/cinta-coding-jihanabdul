import React, { useState, useEffect } from "react";
import { Button, ContentDashboard, Header } from "../../assets/components";
import { IconArrowBack } from "../../assets/images";
import axios from "axios";
import { getData } from "../../utils";
import { useLocation, useParams } from "react-router-dom";

function DetailPosting() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [comment, setComment] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getDataDetail = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setTitle(response.data.title);
    setDesc(response.data.body);
  };

  const getComment = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComment(response.data.length);
    setAllComment(response.data);
  };

  useEffect(() => {
    getDataDetail();
    getComment();
    const data = getData("user");
    setUser(data);
  }, []);

  return (
    <section>
      <Header />
      <div className="container">
        <div className="row mt-1">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 mt-5">
              <Button href="/dashboard" type="link" className="arrow-back">
                <img src={IconArrowBack} width={25} alt="" />
              </Button>
              <ContentDashboard noComment desc={title} className="text-muted" />
              <ContentDashboard
                name={user.username}
                className="text-secondary"
                desc={desc}
                noComment
              />
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-10">
                  <div className="col-lg-4 col-sm-4">
                    <a
                      data-bs-toggle="collapse"
                      href="#allComment"
                      className="fa fa-comment-o text-decoration-none"
                    ></a>
                    <a
                      data-bs-toggle="collapse"
                      href="#allComment"
                      className="d-inline ms-2 text-primary text-decoration-none"
                    >
                      {comment}
                    </a>
                  </div>
                </div>
              </div>

              {/* All Comment */}

              <div className="collapse mb-5" id="allComment">
                <div className="row d-flex justify-content-end mt-3">
                  <div className="col col-10">
                    <p className="fw-bold text-muted">All Comment</p>
                  </div>
                </div>

                {allComment.map((item) => (
                  <ContentDashboard
                    key={item.id}
                    showComment
                    descComment={item.body}
                    nameComment={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPosting;
