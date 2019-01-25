import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";
import "../post-list-item/post-list-item.css";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn React",
          important: false,
          like: false,
          id: "2w1d"
        },
        { label: "Got fun?", important: true, like: false, id: "wx1s" },
        { label: "I wanna to ride!", important: false, like: false, id: "1qw3" }
      ],
      term: "",
      filter: "all"
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newData
      };
    });
  }

  addItem(body) {
    const newPost = {
      label: body,
      important: false,
      id: this.maxId++
    };
    if (body.length > 0) {
      this.setState(({ data }) => {
        const newData = [...data, newPost];
        return {
          data: newData
        };
      });
    } else {
      alert("Can`t poast empty, type anything!");
    }
  }

  onToggleImportant(id) {
    this.setToggle(id, "important");
  }

  onToggleLiked(id) {
    this.setToggle(id, "like");
  }

  setToggle(id, rule) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];

      let newItem = {};

      switch (rule) {
        case "like":
          newItem = { ...old, like: !old.like };
          break;
        case "important":
          newItem = { ...old, important: !old.important };
          break;
        default:
          break;
      }

      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];

      return {
        data: newArray
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) return items;
    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  filterPosts(items, filter) {
    if (filter === "like") {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
