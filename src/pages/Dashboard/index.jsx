import React from "react";
import { ContentDashboard, Header, Input } from "../../assets/components";

function Dashboard() {
  return (
    <section className="mb-5">
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 mt-5">
            <Input placeholder="Search" type="text" search />
            <ContentDashboard
              name="Abit"
              className="text-secondary"
              countComment={20}
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temporibus maiores laudantium ex dolorum natus totam? Deleniti sunt totam quaerat maxime nostrum dolorem. Hic, ipsam."
              detail
            />
            <ContentDashboard
              name="Abit"
              className="text-secondary"
              countComment={5}
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eos at iste magnam, temporibus maiores "
              detail
            />
            <ContentDashboard
              name="Abit"
              className="text-secondary"
              countComment={20}
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              detail
            />
            <div className="row">
              <div className="col-lg-12">
                <p className="text-end">
                  prev <span>1</span> <span>2</span> <span>3</span> next
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
