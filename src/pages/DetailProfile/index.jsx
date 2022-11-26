import React, { useEffect, useState } from "react";
import { Button, ContentDashboard, Header } from "../../assets/components";
import { IconArrowBack } from "../../assets/images";
import { getData } from "../../utils";

function DetailProfile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = getData("user");
    setUser(data);
    console.log(data);
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
              <div className="row d-flex justify-content-center mt-5">
                <div className="col col-9 mb-3">
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <td
                            height={50}
                            width={100}
                            className="text-secondary fw-bold"
                          >
                            Username
                          </td>
                          <td width={200} className="text-secondary fw-bold">
                            :
                          </td>
                          <td className="fw-bold">{user.username}</td>
                        </tr>
                        <tr>
                          <td
                            height={50}
                            width={100}
                            className="text-secondary fw-bold"
                          >
                            Email
                          </td>
                          <td width={150} className="text-secondary fw-bold">
                            :
                          </td>
                          <td className="fw-bold">{user.email}</td>
                        </tr>
                        <tr>
                          <td
                            height={50}
                            width={100}
                            className="text-secondary fw-bold"
                          >
                            Address
                          </td>
                          <td width={150} className="text-secondary fw-bold">
                            :
                          </td>
                          <td className="fw-bold">{user.address?.city}</td>
                        </tr>
                        <tr>
                          <td
                            height={50}
                            width={100}
                            className="text-secondary fw-bold"
                          >
                            Phone
                          </td>
                          <td width={150} className="text-secondary fw-bold">
                            :
                          </td>
                          <td className="fw-bold">{user.phone}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <table>
                    <tbody>
                      <tr>
                        <td width={85} className="text-secondary fw-bold">
                          Username
                        </td>
                        <td width={160} className="text-secondary fw-bold">
                          :
                        </td>
                        <td className="fw-bold">Jihan Abdul Rohman</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProfile;
