import React from "react";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex" action="">
      <input
        type="text"
        placeholder="Type your mind here!"
        className="form-control new-form-label"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Post It!
      </button>
    </form>
  );
};

export default PostAddForm;
