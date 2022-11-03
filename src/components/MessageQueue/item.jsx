import React from "react";

const Item = ({ message }) => {
  return (
    <div className="relative my-0.5 mx-auto left-[-50%] px-4 py-1 text-sm font-light rounded-md text-white bg-black">
      {message}
    </div>
  );
};

export default Item;
