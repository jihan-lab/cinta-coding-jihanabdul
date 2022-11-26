import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ContentDashboard } from "../../assets/components";
import { getData } from "../localStorage";

export const dataItems = (dataArray) => {
  const array = [
    {
      userId: 3,
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto…t vel beatae sequi ullam sed tenetur perspiciatis",
      countComment: 5,
    },
    {
      userId: 3,
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam…ecusandae veniam\ntempora et tenetur expedita sunt",
      countComment: 5,
    },
  ];
  console.log("data temp :", dataArray);
  console.log("array :", array);

  return array;
};

export const Items = ({ currentItems }) => {
  //   const [user, setUser] = useState([]);
  const user = getData("user");
  //   setUser(data);
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item) => (
          <ContentDashboard
            // key={items.id}
            name={user.username}
            className="text-secondary"
            countComment={item?.countComment}
            desc={item?.title}
            detail
          />
        ))}
    </div>
  );
};

export const PaginatedItems = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dataItems().slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataItems().length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataItems().length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
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
    </>
  );
};
