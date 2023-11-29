import React, { Component } from "react";

class CrudOperations extends Component {
  state = {
    posts: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" },
    ],
  };

  handleAdd = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title: `Random Post ${Math.floor(Math.random() * 100)}`,
    };

    this.setState((prevState) => ({
      posts: [...prevState.posts, newPost],
    }));
  };

  handleUpdate = (post) => {
    console.log("Update", post);
  };

  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-2xl">
          <div className="flex justify-end mb-4">
            <button className="btn btn-primary" onClick={this.handleAdd}>
              Add
            </button>
          </div>
          <table className="table text-black">
            <thead>
              <tr className="text-black">
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => this.handleUpdate(post)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(post)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CrudOperations;
