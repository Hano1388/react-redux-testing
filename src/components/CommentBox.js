import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Form, TextArea, Button } from 'semantic-ui-react'

class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.state.comment? this.props.saveComment(this.state.comment) : alert('You need to enter a comment');
    this.setState({ comment: '' });
  }
  render() {
    return (
      <div className="comment-box">
        <Form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <TextArea
            className="comment-textarea"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <Button className="right floated" type="submit" content="Add a Comment"/>
        </Form>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
