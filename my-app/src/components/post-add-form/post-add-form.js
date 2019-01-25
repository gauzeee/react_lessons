import React from "react";

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Type your mind here!"
          className="form-control new-form-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Post!
        </button>
      </form>
    );
  }
}
