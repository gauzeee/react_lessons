import React from "react";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    /* width: 150px;
    height: 150px; */
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = () => {
  return (
    <Header>
      <h1>gauzeee</h1>
      <h2>5 posts, 0 in favorites</h2>
    </Header>
  );
};

export default AppHeader;
