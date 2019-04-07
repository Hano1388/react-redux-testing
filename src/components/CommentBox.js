import React from 'react';

class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ comment: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea
          className="comment-textarea"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentBox;
