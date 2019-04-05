import React from 'react';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box">
        <textarea className="comment-textarea"></textarea>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default CommentBox;
