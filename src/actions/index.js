const INITIAL_STATE = {
  comments: ['First Comment', 'Second Comment']
};

export fetchComments = () => {
  return {
    type: FETCH_COMMENTS,
    payload: INITIAL_STATE.comments
  }
}
