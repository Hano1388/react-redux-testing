import React from 'react';

class CommentBox extends React.Component {
  state = {
    comment: ''
  }
  handleChange = event => {
    this.setState({ comment: event.target.value });
  }
  render() {
    return (
      <div className="comment-box">
        <textarea
          className="comment-textarea"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default CommentBox;
