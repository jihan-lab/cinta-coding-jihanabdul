import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentDashboard, Header, Input } from "../../assets/components";
import { getData } from "../../utils";
import ReactPaginate from "react-paginate";

function Dashboard() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  const getDataPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = response.data.filter((item) => item.userId === user.id);
    let dataTemp = [];
    await Promise.all(
      data.map(async (item) => {
        const responseComment = await axios(
          `https://jsonplaceholder.typicode.com/posts/${item.id}/comments`
        );
        dataTemp.push({
          ...item,
          countComment: responseComment.data.length,
        });
      })
    );

    setPost(dataTemp);
  };

  // pagination
  const items = post;

  function Items({ currentItems }) {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id} className="mb-5">
              <ContentDashboard
                name={user.username}
                className="text-secondary"
                countComment={item.countComment}
                desc={item.title}
                detail
                href={`/post/${item.id}`}
              />
            </div>
          ))}
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="div">
          <Items currentItems={currentItems} />
        </div>
        <div className="container">
          <div
            style={{ height: "40vh" }}
            className="d-flex justify-content-end align-items-end"
          >
            <div className="row">
              <div className="col col-lg-12 col-md-6 col-sm-4">
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // EndPagination

  useEffect(() => {
    if (post.length < 1) {
      const data = getData("user");
      setUser(data);
      getDataPost();
    }
  }, [post]);
  return (
    <section className="mb-5">
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 mt-5">
            <Input placeholder="Search" type="text" search />
            <PaginatedItems itemsPerPage={1} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
