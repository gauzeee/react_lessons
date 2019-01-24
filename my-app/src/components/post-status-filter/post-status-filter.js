import React from "react";
import { Button } from "reactstrap";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button outline color="info">
        All
      </Button>
      <button className="btn-btn-outline-primary">Favorites</button>
    </div>
  );
};

export default PostStatusFilter;
