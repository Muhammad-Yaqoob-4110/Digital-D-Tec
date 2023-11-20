import React, { Component } from "react";
class Input extends Component {
  state = {};
  render() {
    const { label } = this.props;
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          className="input input-bordered bg-white text-custom"
        />
      </div>
    );
  }
}

export default Input;
