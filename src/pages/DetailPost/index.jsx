import React from "react";
import { Button, ContentDashboard, Header } from "../../assets/components";
import { IconArrowBack } from "../../assets/images";

function DetailPosting() {
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
              <ContentDashboard
                noComment
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam,"
                className="text-muted"
              />
              <ContentDashboard
                name="Abit"
                className="text-secondary"
                countComment={20}
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temporibus maiores laudantium ex dolorum natus totam? Deleniti sunt totam quaerat maxime nostrum dolorem. Hic, ipsam."
                detail
              />
              <div className="row d-flex justify-content-end">
                <div className="col col-11">
                  <p className="fw-bold text-muted ">All Comment</p>
                </div>
              </div>
              <ContentDashboard
                showComment
                descComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temp"
                nameComment="Jihan"
              />
              <ContentDashboard
                showComment
                descComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temp"
                nameComment="Jihan"
              />
              <ContentDashboard
                showComment
                descComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temp"
                nameComment="Jihan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPosting;
